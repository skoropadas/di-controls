import {computed, Directive, effect, Input, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {DICompareHost} from 'di-controls/classes';
import {DI_DEFAULT_COMPARE} from 'di-controls/constants';
import {DIControl, DIControlConfig} from './control';
import {DICompareFunction} from 'di-controls/types';

/**
 * Configuration for the `DIStateControl`.
 */
export interface DIStateControlConfig<TModel> extends DIControlConfig<TModel, TModel> {
	/**
	 * Function that will be used to compare host value with the current control value.
	 */
	compareHost?: DICompareHost<TModel | null> | null;
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
 * ```ts {6} fileName="custom-control.component.ts"
 * @Component({})
 * export class CustomControlComponent extends DIControl<string> {
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
 * ## Changing styles based on the state
 * `DIStateControl` binds `aria-checked` attribute to the host element.
 * You can use it to change styles of your child elements.
 *
 * ```ts {7,12,17} fileName="custom-control.component.ts"
 * @Component({
 *   selector: 'custom-control',
 *   template: ``,
 *   styles: [`
 *     :host {
 *       // checked
 *       &[aria-checked="true"] {
 *         color: green;
 *       }
 *
 *       // unchecked
 *       &[aria-checked="false"] {
 *         color: red;
 *       }
 *
 *       // intermediate
 *       &[aria-checked="mixed"] {
 *         color: blue;
 *       }
 *   `],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 *  })
 *  export class CustomControlComponent<T = boolean> extends DIStateControl<T>  {
 *    constructor() {
 *      super();
 *    }
 *  }
 *  ```
 *
 *  ## Using with `DICollectionControl`
 *  Using `DIStateControl` together with `DICollectionControl` will result in
 *  `DICollectionControl` containing a list of values from `DIStateControl` that have
 *  a checked state. If your `DIStateControl` has objects as values, you may
 *  likely need a comparison function because they can sometimes be immutable.
 *
 * To achieve this, provide your `DICollectionControl` as a `DICompareHost` and
 * inject it into your `DIStateControl` to give `DIStateControl` access to
 * the `compareFn` function.
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
 *       compareHost: inject(DICompareHost, { optional: true }),
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
export abstract class DIStateControl<TModel>
	extends DIControl<TModel | boolean>
	implements OnChanges
{
	@Input()
	value: TModel | true = true;

	checked: Signal<boolean | null> = computed(() => {
		const compareFn: DICompareFunction<TModel | boolean> =
			this.config?.compareHost?.compareFn ?? DI_DEFAULT_COMPARE;

		return compareFn(this.value, this.model()) ? true : this.isIntermediate ? null : false;
	});

	protected constructor(
		protected override readonly config?: DIStateControlConfig<TModel | boolean>,
	) {
		super(config);

		// Setting aria attributes
		effect(() => {
			const ariaChecked = this.checked() === null ? 'mixed' : this.checked();

			this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-checked', `${ariaChecked}`);
		});
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
		this.updateModel(this.value);
	}

	/** Sets unchecked state */
	uncheck(): void {
		this.updateModel(false);
	}

	/** Sets intermediate state */
	intermediate(): void {
		this.updateModel(null);
	}

	/** Toggles checked state */
	toggle(): void {
		this.updateModel(this.checked() === false ? this.value : false);
	}

	get isIntermediate(): boolean {
		return this.model() === null && !!this.config?.hasIntermediate;
	}
}
