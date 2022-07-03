import {Observable} from 'rxjs';
import {Constructor} from 'flex-controls/types';
import {FlBaseControl} from './base-control';

export interface FlBaseControlHost<T, C = T> extends FlBaseControl<T> {
    controlChange: Observable<C | null>;

    typedControlChange(type: Constructor<FlBaseControl<C>>): Observable<C | null>;

    registerControl(control: FlBaseControl<C>): void;

    unregisterControl(control: FlBaseControl<C>): void;
}
