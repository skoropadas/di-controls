import { DestroyRef, Directive, inject, OnInit } from '@angular/core';
import { DIControlValueAccessor } from './control-value-accessor';
import { EMPTY_FUNCTION } from '../constants';

/**
 * Configuration for the `DIControl`.
 */
export interface DIControlConfig<TModel, TChildModel> {
	/**
	 * Host control for the current control. It can be injected using `DI_HOST_CONTROL` token.
	 */
	host?: DIControl<any, TModel> | null;
	/**
	 * Function that will be called when the current control receives an update from the host control or from the
	 * Forms API.
	 *
	 * @param value - new value.
	 */
	onIncomingUpdate?: (value: TModel | null) => void;
	/**
	 * Function that will be called when the current control receives an update from the child control.
	 *
	 * @param control - child control that was updated.
	 * @param value - new value.
	 */
	onChildControlChange?: (control: DIControl<TChildModel>, value: TModel | null) => void;
}

/**
 * DIControl can be used to implement any control that you want. It can work with any model type.
 * All updates from children will be accepted as is. And updates from outside (`FormControl`, `NgModel`, another Control)
 * will be accepted as is too.
 *
 * ## Creating a control
 * To create a control you need to extend your `@Component` or `@Directive` from `DIControl` class.
 * After that your control will be able to work with `NgModel`, `FormControl`.
 *
 * ```ts fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 *  	super();
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
 * 	providers: [provideHostControl(CustomControlComponent)],
 * })
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 * 		super();
 * 	}
 * }
 * ```
 *
 * ## Injecting host control
 * By default your control doesn't communicate with host controls. But you can inject host control and put it
 * into `super` call. This will register your control in the host control and start communication between them.
 *
 * > **Note**
 * > If you register your control as a host for another controls, then you can inject `DI_HOST_CONTROL` token
 * > only with `skipSelf` option.
 *
 * ```ts {4} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 * 		super(inject(DI_HOST_CONTROL));
 * 	}
 * }
 * ```
 *
 * ## Getting model
 * To get model you need to use `model` property. It will return model for the current control.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 * 		super();
 * 	}
 *
 * 	@HostListener('click')
 * 	onClick() {
 * 		console.log(this.model());
 * 	}
 * }
 * ```
 *
 * ## Updating model
 * To update model you need to call `updateModel` method. It will update model for the current control and all
 * children controls, as well as for the `NgModel` or `FormControl`.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 * 		super();
 * 	}
 *
 * 	@HostListener('click')
 * 	onClick() {
 * 		this.updateModel('new value');
 * 	}
 * }
 * ```
 * ## Catching updates
 * Sometimes you may need to catch updates from different sources. For example, to update the value of the native
 * input element. To do this, you can override the `incomingUpdate` method.
 *
 * ```ts {10} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
 * 	constructor() {
 * 		super();
 * 	}
 *
 * 	protected override incomingUpdate(value: string | null): void {
 * 		super.incomingUpdate(value);
 *
 * 		this.elementRef.nativeElement.value = value;
 * 	}
 * }
 * ```
 */
@Directive()
export abstract class DIControl<TModel, TChildModel = TModel>
	extends DIControlValueAccessor<TModel>
	implements OnInit
{
	/**
	 * List of children controls.
	 *
	 * @protected
	 * @internal
	 */
	protected children: Set<DIControl<TChildModel>> = new Set<DIControl<TChildModel>>();
	/**
	 * Control from which we have to update our model.
	 *
	 * @protected
	 * @internal
	 */
	protected updateFrom: DIControl<TChildModel> | null = null;

	/**
	 * Request host for update the current control.
	 * Host will update the current control based on its current state and host control logic.
	 *
	 * @protected
	 * @internal
	 */
	protected requestForUpdate: () => void = EMPTY_FUNCTION;
	/**
	 * Function that should be used to make control touched.
	 */
	protected override touch: () => void = () => this.config?.host?.touch();

	private onControlChangeFn: (value: TModel | null) => void = EMPTY_FUNCTION;
	private destroyRef: DestroyRef = inject(DestroyRef);

	protected constructor(protected readonly config?: DIControlConfig<TModel, TChildModel>) {
		super(config?.onIncomingUpdate);

		this.destroyRef.onDestroy(() => this.config?.host?.unregisterControl(this));
	}

	ngOnInit(): void {
		/*
		 * We have to register control with Promise.resolve because NgModel uses it too to set first
		 * value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 */
		Promise.resolve().then(() => this.config?.host?.registerControl(this));
	}

	/**
	 * Registers provided control as a child of the current control.
	 *
	 * @param control - control that will be registered.
	 * @internal
	 */
	registerControl(control: DIControl<TChildModel>): void {
		this.children.add(control);

		/*
		 * We have to update control because its can be created dynamically.
		 * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 * so there's no need to use angular life cycle hooks
		 */
		Promise.resolve().then(() => {
			this.updateControl(control, this.model());
		});

		control.registerOnControlChange((value: unknown | null) => {
			this.childControlChange(control, value as TModel | null);
			this.config?.onChildControlChange?.(control, value as TModel | null);
		});

		control.registerRequestForUpdate(() => {
			this.updateControl(control, this.model());
		});
	}

	/**
	 * Unregisters provided control from the current control.
	 *
	 * @param control - control that will be unregistered.
	 * @internal
	 */
	unregisterControl(control: DIControl<TChildModel>): void {
		this.children.delete(control);
	}

	override registerOnTouched(fn: () => void): void {
		this.touch = () => {
			fn();

			// Touch host control to update its state
			this.config?.host?.touch();
		};
	}

	/**
	 * Registers provided function as a callback that will be called when the current control changes.
	 * This function will be provided by the host control to update its model.
	 *
	 * @param fn - callback function.
	 * @internal
	 */
	registerOnControlChange(fn: (value: TModel | null) => void): void {
		this.onControlChangeFn = fn;
	}

	/**
	 * Registers provided function as a callback that can be called to request an update from the host control.
	 * After calling this function the host control will update the model of the current control based on the current
	 * state of the control and host control logic.
	 *
	 * @param fn - callback function.
	 * @internal
	 */
	registerRequestForUpdate(fn: () => void): void {
		this.requestForUpdate = fn;
	}

	/**
	 * Updates the model of the current control.
	 * This is the main method that should be used to update the model.
	 *
	 * @param value - new value.
	 */
	override updateModel(value: TModel | null): void {
		super.updateModel(value);
		this.onControlChangeFn(value);
		this.updateControls(this.model());
	}

	override writeValue(value: TModel | null): void {
		if (this.model() !== value) {
			super.writeValue(value);
			this.updateControls(value);
			this.onControlChangeFn(value);
		}
	}

	/**
	 * Updates all child controls with the provided value.
	 *
	 * @param value - new value.
	 * @protected
	 * @internal
	 */
	protected updateControls(value: TModel | null): void {
		this.children.forEach((control: DIControl<TChildModel>) => {
			if (control !== this.updateFrom) {
				this.updateControl(control, value);
			}
		});
		this.updateFrom = null;
	}

	/**
	 * Updates provided control with the provided value.
	 *
	 * @param control - control that will be updated.
	 * @param value - new value.
	 * @protected
	 * @internal
	 */
	protected updateControl(control: DIControl<TChildModel>, value: TModel | null): void {
		control.writeValueFromHost(value as TChildModel);
	}

	/**
	 * Function catches updates from child controls and updates the current control model.
	 *
	 * @param control - control that was updated.
	 * @param value - new value.
	 * @protected
	 * @internal
	 */
	protected childControlChange(control: DIControl<TChildModel>, value: TModel | null): void {
		if (this.model() !== value) {
			this.updateFrom = control;
			this.updateModel(value);
			this.incomingUpdate && this.incomingUpdate(value);
		}
	}
}
