import {computed, Directive, effect, Input, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {DICompareHost} from '../classes';
import {DI_DEFAULT_COMPARE} from '../constants';
import {DIControl, DIControlConfig} from './control';
import {DICompareFunction} from 'di-controls/types';

export interface DIStateControlConfig<TModel> extends DIControlConfig<TModel, TModel> {
	compareHost?: DICompareHost<TModel | null> | null;
	hasIntermediate?: boolean;
}

/** Uses to implement controls with state (like checkbox, radio-button, chip, etc.) */
@Directive({})
export abstract class DIStateControl<TModel> extends DIControl<TModel | boolean> implements OnChanges {
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
