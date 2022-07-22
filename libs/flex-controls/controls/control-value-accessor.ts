import {ChangeDetectorRef, Directive, HostBinding, inject, Input} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {EMPTY_FUNCTION} from 'flex-controls/constants';
import {hasValue} from 'flex-controls/helpers';

/** Class implements basic ControlValueAccessor things */
@Directive()
export abstract class FlControlValueAccessor<T> implements ControlValueAccessor {
    model: T | null = null;
    protected isDisabled: boolean = false;

    onTouched: () => void = EMPTY_FUNCTION;
    private onChange: (value: T | null) => void = EMPTY_FUNCTION;
    protected readonly ngControl: NgControl | null = inject(NgControl, {optional: true, self: true});
    protected readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

    protected constructor() {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    get hasValue(): boolean {
        return hasValue(this.model);
    }

    @Input()
    @HostBinding('attr.data-disabled')
    get disabled(): boolean {
        return this.computeDisabled();
    }

    set disabled(isDisabled: boolean) {
        this.setDisabledState(isDisabled);
    }

    /** We use this getter to set disabled attribute for native HTML tags */
    @HostBinding('attr.disabled')
    get nativeDisabled(): true | null {
        return this.disabled ? true : null;
    }

    protected computeDisabled(): boolean {
        return this.isDisabled;
    }

    registerOnChange(fn: (value: T | null) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(obj: T | null): void {
        if (this.model !== obj) {
            this.update(obj);
        }
    }

    writeValueFromHost(obj: T | null): void {
        if (this.model !== obj) {
            this.update(obj);
            this.onChange(obj);
        }
    }

    /**
     * Updates the model. Use this method to update model from your Control
     *
     * @param value - new value
     */
    updateModel(value: T | null): void {
        if (!this.disabled) {
            this.model = value;
            this.onChange(this.model);
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Triggered when some updates are incoming. Override this method to refresh your Control's view
     *
     * @param value - new value
     * @protected
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    protected incomingUpdate(value: T | null): void {}

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    }

    private update(value: T | null): void {
        this.model = value;
        this.incomingUpdate && this.incomingUpdate(value);
        this.changeDetectorRef.markForCheck();
    }
}
