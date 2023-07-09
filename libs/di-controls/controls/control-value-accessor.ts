import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	inject,
	Input,
	Renderer2,
	signal,
	WritableSignal,
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

	protected constructor() {
		this.ngControl = inject(NgControl, {optional: true, self: true});
		this.changeDetectorRef = inject(ChangeDetectorRef);

		if (this.ngControl) {
			this.ngControl.valueAccessor = this;
		}
	}

	get hasValue(): boolean {
		return hasValue(this.model());
	}

	@Input()
	get disabled(): boolean {
		return this.disabledValue();
	}

	set disabled(isDisabled: boolean) {
		this.setDisabledState(isDisabled);
	}

	registerOnChange(fn: (value: T | null) => void): void {
		this.change = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.touch = fn;
	}

	writeValue(obj: T | null): void {
		if (this.model() !== obj) {
			this.update(obj);
		}
	}

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
	 * Triggered when some updates are incoming. Override this method to refresh your Control's view
	 *
	 * @param value - new value
	 * @protected
	 */
	protected incomingUpdate(value: T | null): void {
		// Override this method to refresh your Control's view
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabledValue.set(isDisabled);

		this.disabledValue()
			? this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'true')
			: this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
		this.renderer.setAttribute(this.elementRef.nativeElement, 'aria-disabled', `${this.disabledValue()}`);
	}

	private update(value: T | null): void {
		this.model.set(value);
		this.incomingUpdate && this.incomingUpdate(value);
		this.changeDetectorRef.markForCheck();
	}
}
