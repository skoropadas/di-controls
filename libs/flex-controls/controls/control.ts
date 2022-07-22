import {Directive, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {FlBaseControl, FlBaseControlHost} from 'flex-controls/interfaces';
import {FlControlValueAccessor} from './control-value-accessor';
import {EMPTY_FUNCTION} from 'flex-controls/constants';

/** Uses to implement any control that you want */
@Directive()
export abstract class FlControl<T> extends FlControlValueAccessor<T> implements FlBaseControl<T>, OnInit, OnDestroy {
    protected requestUpdate: () => void = EMPTY_FUNCTION;
    private onControlChange: (value: T | null) => void = EMPTY_FUNCTION;
    private valueChange$: Subject<T | null> = new Subject<T | null>();

    constructor(protected host?: FlBaseControlHost<T>) {
        super();
    }

    ngOnInit(): void {
        /*
         * We have to register control with Promise.resolve because NgModel uses it too to set first
         * value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
         */
        Promise.resolve().then(() => this.host?.registerControl(this));
    }

    protected override computeDisabled(): boolean {
        return super.computeDisabled() || !!this.host?.disabled;
    }

    registerOnControlChange(fn: (value: T | null) => void): void {
        this.onControlChange = (value: T | null) => {
            fn(value);
            this.valueChange$.next(value);
        };
    }

    registerRequestUpdate(fn: () => void): void {
        this.requestUpdate = fn;
    }

    get valueChange(): Observable<T | null> {
        return this.valueChange$.asObservable();
    }

    /** Updates model and run changes */
    override updateModel(value: T | null): void {
        if (!this.disabled) {
            super.updateModel(value);
            this.onControlChange(value);
        }
    }

    override writeValue(value: T | null): void {
        if (this.model !== value) {
            super.writeValue(value);
            this.onControlChange(value);
        }
    }

    ngOnDestroy(): void {
        this.host?.unregisterControl(this);
    }
}
