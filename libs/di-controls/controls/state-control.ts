import {computed, Directive, InputSignal, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {DICompareHost} from 'di-controls/classes';
import {DI_DEFAULT_COMPARE} from 'di-controls/constants';
import {DIControl, DIControlConfig} from './control';
import {DICompareFunction} from 'di-controls/types';
import {resolveValue} from 'di-controls/helpers';

/**
 * Configuration for the `DIStateControl`.
 */
export interface DIStateControlConfig<TModel, TValue extends TModel = TModel> extends DIControlConfig<TModel, TModel> {
	/**
	 * Value that will be used for the unchecked state.
	 */
	uncheckValue?: TModel;
	/**
	 * Function that will be used to compare model value with the `value` property.
	 */
	compare?: DICompareHost<TModel | null, TValue> | DICompareFunction<TModel | null, TValue> | null;
	/**
	 * Indicates whether the current control can have intermediate state.
	 */
	hasIntermediate?: boolean;
}

/**
 * `DIStateControl` can be used to implement state controls (checkbox, radio, chip, switch, etc.).
 * It extends `DIControl` and adds `checked` signal that can be used to get checked state.
 * By default it works with `boolean` type, it adds `value` input that can be used to set custom
 * "true" value.
 *
 * ## Creating a control
 * To create a control you need to extend your `@Component` or `@Directive` from `DIStateControl` class.
 * After that your control will be able to work with `NgModel`, `FormControl`.
 *
 * ```ts fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent<T = boolean> extends DIStateControl<T> {
 *   @Input({required: true})
 *   value!: T;
 *
 *   constructor() {
 *    super();
 *  }
 * }
 *  ```
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
 * export class CustomControlComponent<T = boolean> extends DIStateControl<T> {
 *   constructor() {
 *     // we add `optional` option to make it possible to use this control without host
 *     super({host: injectHostControl({optional: true})});
 *   }
 * }
 * ```
 *
 * ## Getting checked state
 * To get checked state you need to use `checked` signal. It will return `true` if the current control is checked,
 * `false` if it is unchecked and `null` if it is in intermediate state.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent<T> extends DIControl<T> {
 *  @Input({required: true})
 *   value!: T;
 *
 *   constructor() {
 *     super();
 *
 *     console.log(this.checked());
 *   }
 * }
 * ```
 *
 * ## Getting model
 * To get model you need to use `model` property. It will return model for the current control.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent<T = boolean> extends DIStateControl<T> {
 *   constructor() {
 *     super();
 *   }
 *
 *   @HostListener('click')
 *   onClick() {
 *     console.log(this.checked());
 *   }
 * }
 * ```
 *
 * ## Updating model
 * To update model you should use `check`, `uncheck`, `intermediate` or `toggle` methods.
 * They will update model based on the current state and configuration.
 *
 * ```ts {9} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent<T = boolean> extends DIStateControl<T> {
 *   constructor() {
 *     super();
 *   }
 *
 *   @HostListener('click')
 *   onClick() {
 *     this.toggle();
 *   }
 * }
 * ```
 *
 * ## Catching updates
 * Sometimes you may need to catch updates from different sources. For example, to update the value of the native
 * input element. To do this, you can provide the `onIncomingUpdate` hook.
 *
 * ```ts {6} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent<T = boolean> extends DIStateControl<T>  {
 *   constructor() {
 *     super({
 *       onIncomingUpdate: (value: string | null) => {
 *         this.elementRef.nativeElement.value = value;
 *       },
 *     });
 *   }
 * }
 * ```
 *
 *
 *  ## Using with DICollectionControl
 *  Using `DIStateControl` together with `DICollectionControl` will result in
 *  `DICollectionControl` containing a list of values from `DIStateControl` that have
 *  a checked state. If your `DIStateControl` has objects as values, you may
 *  likely need a comparison function because they can sometimes be immutable.
 *
 * To achieve this, provide your `DICollectionControl` as a `DICompareHost` and
 * inject it into your `DIStateControl` to give `DIStateControl` access to
 * the `compareFn` function.
 *
 * > **Warning**
 * > `DICollectionControl` requires an explicit specification of the `uncheckedValue` in the `DIStateControl`
 *
 * ```ts {3-4} fileName="checkbox-group.component.ts"
 * @Component({
 *   providers: [
 *     provideHostControl(CheckboxGroupComponent),
 *     provideCompareHost(CheckboxGroupComponent),
 *   ],
 * })
 * export class CheckboxGroupComponent<T> extends DICollectionControl<T> {
 *   constructor() {
 *     super();
 *   }
 * }
 * ```
 *
 * ```ts {5-7} fileName="checkbox.component.ts"
 * @Component()
 * export class CheckboxComponent<T> extends DIStateControl<T> {
 *   constructor() {
 *     super({
 *       host: injectHostControl({ optional: true }),
 *       compare: inject(DICompareHost, { optional: true }),
 *       hasIntermediate: true,
 *     });
 *
 *   @HostListener('click')
 *   onClick() {
 *     this.toggle();
 *   }
 * }
 * ```
 */
@Directive({})
export abstract class DIStateControl<TModel, TValue extends TModel = TModel>
	extends DIControl<TModel>
	implements OnChanges
{
	/**
	 * Value that will be used for the checked state.
	 * You can override it to transform it to `@Input` or to set value by default.
	 */
	abstract value: TValue | InputSignal<TValue>;

	checked: Signal<boolean | null> = computed(() => {
		const compareFn: DICompareFunction<TModel | null, TValue> =
			typeof this.config?.compare === 'function'
				? this.config.compare
				: resolveValue<DICompareFunction<TModel | null, TValue>>(this.config?.compare?.compareFn ?? DI_DEFAULT_COMPARE);

		return compareFn(this.model(), resolveValue(this.value)) ? true : this.isIntermediate ? null : false;
	});

	protected constructor(
		protected override readonly config?: DIStateControlConfig<TModel, TValue>,
	) {
		super(config);
	}

	ngOnChanges({ value }: SimpleChanges): void {
		/*
		 * We have to request host for updates, because when we use ngFor directive
		 * with trackBy function, Angular doesn't re-create components, it just changes their inputs,
		 * so we have to request for updates our host, to determine right checked state
		 */
		if (value) {
			this.requestForUpdate();
		}
	}

	/** Sets checked state */
	check(): void {
		this.updateModel(resolveValue(this.value));
	}

	/** Sets unchecked state */
	uncheck(): void {
		if (!('uncheckValue'  in (this.config ?? {}))) {
			throw new Error('To use uncheck method you need to provide uncheckValue in DIStateControl config');
		}

		this.updateModel(this.config!.uncheckValue as TModel);
	}

	/** Sets intermediate state */
	intermediate(): void {
		this.updateModel(null);
	}

	/** Toggles checked state */
	toggle(): void {
		this.checked() ? this.uncheck() : this.check();
	}

	get isIntermediate(): boolean {
		return this.model() === null && !!this.config?.hasIntermediate;
	}
}
