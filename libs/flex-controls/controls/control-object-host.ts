import {Directive} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {FlBaseControl, FlBaseControlHost} from 'flex-controls/interfaces';
import {AbstractConstructor, FlControlObjectHostGetValue, FlControlObjectHostSetValue} from 'flex-controls/types';
import {FlControl} from './control';

/** Uses to implement host that stores value to an object key */
@Directive()
export abstract class FlControlObjectHost<T, C> extends FlControl<T> implements FlBaseControlHost<T, C> {
    private controls: Set<FlControl<C>> = new Set<FlControl<C>>();
    private updatesFrom: FlControl<C> | null = null;
    private controlChange$: Subject<[FlBaseControl<C>, C | null]> = new Subject<[FlBaseControl<C>, C | null]>();

    protected constructor(
        private getValue: FlControlObjectHostGetValue<T, C>,
        private setValue: FlControlObjectHostSetValue<T, C>,
        protected override host?: FlBaseControlHost<T>,
    ) {
        super(host);
    }

    registerControl(control: FlControl<C>): void {
        this.controls.add(control);

        /*
         * We have to update control because its can be created dynamically.
         * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
         * so there's no need to use angular life cycle hooks
         */
        Promise.resolve().then(() => control.writeValueFromHost(this.getValue(this.model)));

        control.registerOnControlChange((value: C | null) => {
            this.updatesFrom = control;
            this.updateModel(this.setValue(this.model, value));
            this.controlChange$.next([control, value]);
        });

        control.registerRequestUpdate(() => {
            control.writeValueFromHost(this.getValue(this.model));
        });
    }

    unregisterControl(control: FlControl<C>): void {
        this.controls.delete(control);
    }

    get controlChange(): Observable<C | null> {
        return this.controlChange$.pipe(map(([, value]: [FlBaseControl<C>, C | null]) => value));
    }

    typedControlChange(type: AbstractConstructor<FlBaseControl<C>>): Observable<C | null> {
        return this.controlChange$.pipe(
            filter(([control]: [FlBaseControl<C>, C | null]) => control instanceof type),
            map(([, value]: [FlBaseControl<C>, C | null]) => value),
        );
    }

    override updateModel(obj: T | null): void {
        super.updateModel(obj);
        this.updateControls(this.model);
    }

    protected override incomingUpdate(obj: T | null): void {
        this.updateControls(obj);
    }

    protected updateControls(value: T | null): void {
        this.controls.forEach((control: FlControl<C>) => {
            if (control !== this.updatesFrom) {
                control.writeValueFromHost(this.getValue(value));
            }
        });
        this.updatesFrom = null;
    }
}
