import {ControlValueAccessor} from '@angular/forms';
import {Observable} from 'rxjs';

export interface FlBaseControl<T> extends ControlValueAccessor {
    disabled: boolean;

    registerOnControlChange(fn: (value: T | null) => void): void;

    registerRequestUpdate(fn: () => void): void;

    updateModel(value: T | null, silent?: boolean): void;

    valueChange: Observable<T | null>;
}
