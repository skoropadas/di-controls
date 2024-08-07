import {Directive} from '@angular/core';
import {DICompareHost, SetCompare} from 'di-controls/classes';
import {DICompareFunction} from 'di-controls/types';
import {DIControl, DIControlConfig} from './control';
import {DIStateControl} from './state-control';
import {resolveValue} from 'di-controls/helpers';
import {DI_DEFAULT_COMPARE} from 'di-controls/constants';

/**
 * Configuration for the `DICollectionControl`.
 */
export interface DICollectionControlConfig<TModel, TChildModel> extends DIControlConfig<TModel[], TChildModel> {
	/**
	 * Function that will be used to compare values in the array.
	 * Useful when you want to compare objects by some property.
	 */
	compare?: DICompareHost<TModel | null> | DICompareFunction<TModel | null> | null;
}

/**
 * `DICollectionControl` can be used to implement array controls (checkbox group, radio group, chips, etc.).
 * It has an additional integration with `DIStateControl` that allows you to use it as a host for
 * `DIStateControl` controls. If you use `DIStateControl` as a child control, then `DICollectionControl`
 * will update its model when the child control is checked or unchecked, so `DICollectionControl` will
 * contain only checked values.
 *
 * It also works with other controls, but their model should be an array.
 *
 * > **Warning**
 * > If child control model is updated with non-array value, then `DICollectionControl` will be updated with `null`.
 *
 * ## Creating a control
 * To create a control you need to extend your `@Component` or `@Directive` from `DICollectionControl` class.
 * After that your control will be able to work with `NgModel`, `FormControl`.
 *
 * ```ts fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *    super();
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
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *     super();
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
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *     // we add `optional` option to make it possible to use this control without host
 *     super({host: injectHostControl({optional: true})});
 *   }
 * }
 * ```
 *
 * ## Getting model
 * To get model you need to use `model` property. It will return model for the current control.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *     super();
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
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *     super();
 *   }
 *
 *   @HostListener('click')
 *   onClick() {
 *     this.updateModel(['new value']);
 *   }
 * }
 * ```
 * ## Catching updates
 * Sometimes you may need to catch updates from different sources. For example, to update the value of the native
 * input element. To do this, you can provide the `onIncomingUpdate` hook.
 *
 * ```ts {6} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DICollectionControl<string> {
 *   constructor() {
 *     super({
 *       onIncomingUpdate: (value: string[] | null) => {
 *         this.elementRef.nativeElement.value = value;
 *       },
 *     });
 *   }
 * }
 * ```
 * ```
 */
@Directive()
export abstract class DICollectionControl<TModel> extends DIControl<TModel[], TModel | TModel[]> {
	private proxyModel: SetCompare<TModel> = new SetCompare<TModel>();

	protected constructor(protected override config?: DICollectionControlConfig<TModel, TModel | TModel[]>) {
		super(config);
	}

	private getCompareFn(): DICompareFunction<TModel> {
		return typeof this.config?.compare === 'function'
			? this.config.compare
			: resolveValue<DICompareFunction<TModel | null>>(this.config?.compare?.compareFn ?? DI_DEFAULT_COMPARE);
	}

	override updateModel(obj: TModel[] | null): void {
		this.proxyModel = new SetCompare(this.getCompareFn(), obj);

		super.updateModel(obj);
	}

	override writeValue(value: TModel[] | null) {
		this.proxyModel = new SetCompare(this.getCompareFn(), value);

		super.writeValue(value);
	}

	override writeValueFromHost(obj: TModel[] | null) {
		this.proxyModel = new SetCompare(this.getCompareFn(), obj);

		super.writeValueFromHost(obj);
	}

	protected override childControlChange(
		control: DIControl<TModel | TModel[]>,
		value: TModel[] | null,
	) {
		this.updateFrom = control;
		this.updateModel(this.getNewModel(control, value));
		this.incomingUpdate && this.incomingUpdate(this.model());
	}

	private getNewModel(
		control: DIControl<TModel | TModel[]>,
		updates: TModel | TModel[] | null,
	): TModel[] | null {
		if (control instanceof DIStateControl) {
			control.checked()
				? this.proxyModel.add(control.value)
				: this.proxyModel.delete(control.value);
		} else if (Array.isArray(updates)) {
			this.proxyModel = new SetCompare<TModel>(this.getCompareFn(), updates);
		} else {
			this.proxyModel = new SetCompare<TModel>(this.getCompareFn());

			return null;
		}

		return this.proxyModel.toArray();
	}

	protected override updateControl(control: DIControl<TModel | TModel[]>): void {
		if (control instanceof DIStateControl) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			control.writeValueFromHost(this.proxyModel.has(control.value) ? control.value : control.config.uncheckValue);
		} else {
			control.writeValueFromHost(this.model());
		}
	}
}
