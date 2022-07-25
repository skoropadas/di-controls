import {forwardRef, Provider, Type} from '@angular/core';
import {FL_CONTROL_HOST} from 'flex-controls/tokens';
import {FlControlHost} from 'flex-controls/controls';

export function provideControlHost<T extends FlControlHost<unknown>>(componentOrDirective: Type<T>): Provider {
    return {
        provide: FL_CONTROL_HOST,
        useExisting: forwardRef(() => componentOrDirective),
    };
}
