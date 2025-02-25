import {
	ChangeDetectorRef,
	Directive, effect, ElementRef,
	inject,
	model, ModelSignal, Renderer2,
	Signal,
	signal,
	WritableSignal,
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION} from 'di-controls/constants';
import {hasValue} from 'di-controls/helpers';
import {toObservable} from '@angular/core/rxjs-interop';

export interface DIControlValueAccessorConfig<T> {
	/**
	 * Function that will be called when the current control receives an update from the host control or from the
	 * Forms API.
	 *
	 * @param value - new value.
	 */
	onIncomingUpdate?: (value: T | null) => void;

	/**
	 * Add support for native element. Which means that the control will
	 * update the native element attributes like `disabled`.
	 */
	withNativeElementSupport?: boolean;
}

/**
 * Base implementation of ControlValueAccessor
 */
@Directive()
export abstract class DIControlValueAccessor<T> implements ControlValueAccessor {
	protected readonly model: Signal<T | null> = signal(null);
	protected readonly ngControl: NgControl | null;
	protected readonly changeDetectorRef: ChangeDetectorRef;
	readonly disabled: ModelSignal<boolean> = model(false);

	protected touch: () => void = EMPTY_FUNCTION;
	protected change: (value: T | null) => void = EMPTY_FUNCTION;

	#element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
	#renderer = inject(Renderer2);

	protected constructor(protected readonly config?: DIControlValueAccessorConfig<T>) {
		this.ngControl = inject(NgControl, {optional: true, self: true});
		this.changeDetectorRef = inject(ChangeDetectorRef);

		if (this.ngControl && !this.ngControl.valueAccessor) {
			this.ngControl.valueAccessor = this;
		}

		if (this.config?.withNativeElementSupport) {
			toObservable(this.disabled)
				.subscribe((isDisabled) => this.addDisabledAttribute(isDisabled))
		}
	}

	/**
	 * Returns true if the control is not empty.
	 */
	get hasValue(): boolean {
		return hasValue(this.model());
	}

	/**
	 * Method is called by the forms API.
	 *
	 * @param fn - callback function to register on value change
	 * @internal
	 */
	registerOnChange(fn: (value: T | null) => void): void {
		this.change = fn;
	}

	/**
	 * Method is called by the forms API.
	 *
	 * @param fn - callback function to register on touch
	 * @internal
	 */
	registerOnTouched(fn: () => void): void {
		this.touch = fn;
	}

	/**
	 * Method is called by the forms API to write to the view when programmatic changes from model to view are requested.
	 *
	 * @param obj - new value
	 * @internal
	 */
	writeValue(obj: T | null): void {
		if (this.model() !== obj) {
			this.update(obj);
		}
	}

	/**
	 * Updates the model.
	 *
	 * @param value - new value
	 */
	internalUpdateModel(value: T | null): void {
		(this.model as WritableSignal<T | null>).set(value);
		this.change(this.model());
		this.changeDetectorRef.markForCheck();
	}

	/**
	 * Method is called by the forms API to write to the view when programmatic changes from model to view are requested.
	 *
	 * @param isDisabled - new value
	 * @internal
	 */
	setDisabledState(isDisabled: boolean): void {
		this.disabled.set(isDisabled);
		this.addDisabledAttribute(isDisabled);
	}

	private update(value: T | null): void {
		(this.model as WritableSignal<T | null>).set(value);
		this.config?.onIncomingUpdate && this.config.onIncomingUpdate(value);
		this.changeDetectorRef.markForCheck();
	}

	private addDisabledAttribute(isDisabled: boolean): void {
		if (this.config?.withNativeElementSupport) {
				isDisabled
					? this.#renderer.setAttribute(this.#element, 'disabled', 'true')
					: this.#renderer.removeAttribute(this.#element, 'disabled');
		}
	}
}
