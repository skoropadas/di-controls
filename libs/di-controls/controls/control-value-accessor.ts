import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	inject,
	Input,
	Renderer2,
	signal,
	WritableSignal
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION} from '../constants';
import {hasValue} from '../helpers';

/**
 * Base implementation of ControlValueAccessor
 */
@Directive()
export abstract class DIControlValueAccessor<T> implements ControlValueAccessor {
	protected readonly model: WritableSignal<T | null> = signal(null);
	protected readonly ngControl: NgControl | null;
	protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
	protected readonly changeDetectorRef: ChangeDetectorRef;
	protected readonly renderer: Renderer2 = inject(Renderer2);
	protected readonly disabledValue: WritableSignal<boolean> = signal(false);

	protected touch: () => void = EMPTY_FUNCTION;
	protected change: (value: T | null) => void = EMPTY_FUNCTION;

	protected constructor(protected readonly incomingUpdate?: (value: T | null) => void) {
		this.ngControl = inject(NgControl, { optional: true, self: true });
		this.changeDetectorRef = inject(ChangeDetectorRef);

		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	/**
	 * Returns true if the control is not empty.
	 */
	get hasValue(): boolean {
		return hasValue(this.model());
	}

	/**
	 * Returns true if the control is disabled.
	 */
	@Input()
	get disabled(): boolean {
		return this.disabledValue();
	}

	set disabled(isDisabled: boolean) {
		this.setDisabledState(isDisabled);
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
	 * Method is called by the host to update the value of the control.
	 *
	 * @param obj - new value
	 * @internal
	 */
	writeValueFromHost(obj: T | null): void {
		if (this.model() !== obj) {
			this.update(obj);
			this.change(obj);
		}
	}

	/**
	 * Updates the model. Use this method to update model from your Control
	 *
	 * @param value - new value
	 */
	updateModel(value: T | null): void {
		this.model.set(value);
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
		this.disabledValue.set(isDisabled);

		this.disabledValue()
			? this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true')
			: this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
		this.renderer.setAttribute(
			this.elementRef.nativeElement,
			'aria-disabled',
			`${this.disabledValue()}`,
		);
	}

	private update(value: T | null): void {
		this.model.set(value);
		this.incomingUpdate && this.incomingUpdate(value);
		this.changeDetectorRef.markForCheck();
	}
}
