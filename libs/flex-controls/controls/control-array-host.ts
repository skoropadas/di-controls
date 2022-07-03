import {ChangeDetectorRef, Directive, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {FlCompareHost, FlSetCompare} from 'flex-controls/classes';
import {FL_DEFAULT_COMPARE} from 'flex-controls/constants';
import {FlBaseControl, FlBaseControlHost} from 'flex-controls/interfaces';
import {AbstractConstructor, FlCompareFunction} from 'flex-controls/types';
import {FlControl} from './control';
import {FlControlSelector} from './control-selector';

/** Uses to implement host that stores multiple values */
@Directive()
export abstract class FlControlArrayHost<T>
    extends FlControl<T[]>
    implements FlBaseControlHost<T[], T | T[]>, FlCompareHost<T>
{
    /** Uses to compare two values (usefull to compare two objects, for example by id) */
    @Input()
    compareFn: FlCompareFunction<T> = FL_DEFAULT_COMPARE;

    private controls: Set<FlControl<T | T[]>> = new Set<FlControl<T | T[]>>();
    private updatesFrom: FlControl<T | T[]> | null = null;
    private proxyModel: FlSetCompare<T> = new FlSetCompare<T>();
    private controlChange$: Subject<[FlBaseControl<T | T[]>, T | T[] | null]> = new Subject<
        [FlBaseControl<T | T[]>, T | T[] | null]
    >();

    protected constructor(
        protected override changeDetectorRef: ChangeDetectorRef,
        protected override host?: FlBaseControlHost<T[]>,
        protected override ngControl?: NgControl,
    ) {
        super(changeDetectorRef, host, ngControl);
    }

    registerControl(control: FlControl<T | T[]>): void {
        /* ArrayHost doesn't support ControlSelector with true value, because it doesnt make a sense */
        if (control instanceof FlControlSelector && control.value === true) {
            return;
        }

        this.controls.add(control);

        /*
         * We have to update control because its can be created dynamically.
         * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
         * so there's no need to use angular life cycle hooks
         */
        Promise.resolve().then(() => this.updateControl(control));

        control.registerOnControlChange((value: T | T[] | null) => {
            this.updatesFrom = control;
            this.updateModel(this.getNewModel(control, value));
            this.incomingUpdate(this.model);
            this.controlChange$.next([control, value]);
        });

        control.registerRequestUpdate(() => {
            this.updateControl(control);
        });
    }

    unregisterControl(control: FlControl<T | T[]>): void {
        this.controls.delete(control);
    }

    get controlChange(): Observable<T | T[] | null> {
        return this.controlChange$.pipe(map(([, value]: [FlBaseControl<T | T[]>, T | T[] | null]) => value));
    }

    typedControlChange(type: AbstractConstructor<FlBaseControl<T | T[]>>): Observable<T | T[] | null> {
        return this.controlChange$.pipe(
            filter(([control]: [FlBaseControl<T | T[]>, T | T[] | null]) => control instanceof type),
            map(([, value]: [FlBaseControl<T | T[]>, T | T[] | null]) => value),
        );
    }

    override updateModel(obj: T[] | null): void {
        super.updateModel(obj);
        this.updateControls();
    }

    protected override incomingUpdate(obj: T[] | null): void {
        this.proxyModel = new FlSetCompare(this.compareFn, obj);
        this.updateControls();
    }

    private updateControls(): void {
        this.controls.forEach((control: FlControl<T | T[]>) => {
            if (control !== this.updatesFrom) {
                this.updateControl(control);
            }
        });
        this.updatesFrom = null;
    }

    private getNewModel(control: FlControl<T | T[]>, updates: T | T[] | null): T[] | null {
        if (control instanceof FlControlSelector) {
            control.checked ? this.proxyModel.add(control.value) : this.proxyModel.delete(control.value);
        } else if (Array.isArray(updates)) {
            this.proxyModel = new FlSetCompare<T>(this.compareFn, updates);
        } else {
            this.proxyModel = new FlSetCompare<T>(this.compareFn);
            return null;
        }

        return this.proxyModel.toArray();
    }

    private updateControl(control: FlControl<T | T[]>): void {
        if (control instanceof FlControlSelector) {
            control.writeValueFromHost(this.proxyModel.has(control.value) ? control.value : false);
        } else {
            control.writeValueFromHost(this.model);
        }
    }
}
