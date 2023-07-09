import {computed, Directive, effect, Input, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {DICompareHost} from '../classes';
import {DI_DEFAULT_COMPARE} from '../constants';
import {DIControl} from './control';
import {DICompareFunction} from 'di-controls/types';

/** Uses to implement controls with state (like checkbox, radio-button, chip, etc.) */
@Directive({})
export abstract class DIStateControl<T> extends DIControl<T | boolean> implements OnChanges {
	@Input()
	value: T | true = true;

	checked: Signal<boolean | null> = computed(() => {
		const compareFn: DICompareFunction<T | boolean> = this.compareHost?.compareFn ?? DI_DEFAULT_COMPARE;

		return compareFn(this.value, this.model()) ? true : this.isIntermediate ? null : false;
	});

	protected constructor(
		protected override readonly host?: DIControl<unknown, T> | null,
		protected readonly compareHost?: DICompareHost<T | boolean | null> | null,
		protected readonly hasIntermediate?: boolean,
	) {
		super(host);

		// Setting aria attributes
		effect(() => {
			const ariaChecked = this.checked === null ? 'mixed' : this.checked;

			this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-checked', `${ariaChecked}`);
		});
	}

	ngOnChanges({value}: SimpleChanges): void {
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
		return this.model() === null && !!this.hasIntermediate;
	}
}
