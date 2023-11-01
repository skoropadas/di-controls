import {Directive} from '@angular/core';
import {DIObjectControlGetValue, DIObjectControlSetValue} from 'di-controls/types';
import {DIControl, DIControlConfig} from './control';

/**
 * Configuration for the `DIObjectControl`.
 */
export interface DIObjectControlConfig<TModel, TChildModel> extends DIControlConfig<TModel, TChildModel> {
	/**
	 * Function that will be used to get value from the current object model and set it to the child control
	 * when update is requested.
	 */
	getValue: DIObjectControlGetValue<TModel, TChildModel>;
	/**
	 * Function that will be used to set value to the object model when child control value is changed.
	 */
	setValue: DIObjectControlSetValue<TModel, TChildModel>;
}

/**
 * `DIObjectControl` is very suitable.
 * It is typically used as a host and works exclusively with objects. It is
 * necessary to bind child controls to a specific property of the object,
 * thereby ensuring that they update only that specific property and not the
 * entire object as a whole. Please see `*DateRangePage*`.
 *
 * ## Creating a control
 * To create a control you need to extend your `@Component` or `@Directive` from `DIObjectControl` class
 * and provide `getValue` and `setValue` functions that will be used to get and set value from the object
 * to the child control.
 *
 * ```ts fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *    super({
 *      getValue: (model) => model.objectProperty,
 *      setValue: (model, value) => ({...model, objectProperty: value}),
 *    });
 *  }
 * }
 *  ```
 *
 * ## Registering as a host
 * By default your control can work only with `NgModel` and `FormControl`. But you can register your control as a host
 * for another controls, then your control will be able to update them and accept updates from them. To do that you need to
 * use `provideHostControl` function.
 *
 * ```ts {2} fileName="custom-control.component.ts"
 * @Component({
 *   providers: [provideHostControl(CustomControlComponent)],
 * })
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *     super({
 *      getValue: (model) => model.objectProperty,
 *      setValue: (model, value) => ({...model, objectProperty: value}),
 *    });
 *   }
 * }
 * ```
 *
 * ## Injecting host control
 * By default your control doesn't communicate with host controls. But you can inject host control and put it
 * into `super` call. This will register your control in the host control and start communication between them.
 *
 * > **Note**
 * > If you register your control as a host for another controls, then you can inject it
 * > only with `skipSelf` option.
 *
 * ```ts {5} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *     // we add `optional` option to make it possible to use this control without host
 *     super({
 *       host: injectHostControl({optional: true}),
 *       getValue: (model) => model.objectProperty,
 *       setValue: (model, value) => ({...model, objectProperty: value}),
 *     });
 *   }
 * }
 * ```
 *
 * ## Getting model
 * To get model you need to use `model` property. It will return model for the current control.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *     super(
 *       getValue: (model) => model.objectProperty,
 *       setValue: (model, value) => ({...model, objectProperty: value}),
 *     );
 *   }
 *
 *   @HostListener('click')
 *   onClick() {
 *     console.log(this.model());
 *   }
 * }
 * ```
 *
 * ## Updating model
 * To update model you need to call `updateModel` method. It will update model for the current control and all
 * children controls, as well as for the `NgModel` or `FormControl`.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *     super(
 *       getValue: (model) => model.objectProperty,
 *       setValue: (model, value) => ({...model, objectProperty: value}),
 *     );
 *   }
 *
 *   @HostListener('click')
 *   onClick() {
 *     this.updateModel({objectProperty: 'new value'});
 *   }
 * }
 * ```
 * ## Catching updates
 * Sometimes you may need to catch updates from different sources. For example, to update the value of the native
 * input element. To do this, you can provide the `onIncomingUpdate` hook.
 *
 * ```ts {6} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIObjectControl<MyObject> {
 *   constructor() {
 *     super({
 *       onIncomingUpdate: (value: MyObject | null) => {
 *         this.elementRef.nativeElement.value = value;
 *       },
 *     });
 *   }
 * }
 * ```
 */
@Directive()
export abstract class DIObjectControl<TModel, TChildModel> extends DIControl<TModel, TChildModel> {
	protected constructor(
		protected override config: DIObjectControlConfig<TModel, TChildModel>,
	) {
		super(config);
	}

	override registerControl(control: DIControl<TChildModel>): void {
		this.children.add(control);

		/*
		 * We have to update control because its can be created dynamically.
		 * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 * so there's no need to use angular life cycle hooks
		 */
		Promise.resolve().then(() => control.writeValueFromHost(this.config.getValue(this.model())));

		control.registerOnControlChange((value: TChildModel | null) => {
			this.updateFrom = control;
			this.updateModel(this.config.setValue(this.model(), value));
		});

		control.registerRequestForUpdate(() => {
			control.writeValueFromHost(this.config.getValue(this.model()));
		});
	}

	protected override updateControl(control: DIControl<TChildModel>, value: TModel | null): void {
		control.writeValueFromHost(this.config.getValue(value));
	}
}
