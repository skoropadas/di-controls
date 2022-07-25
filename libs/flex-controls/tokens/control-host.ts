import {forwardRef, InjectionToken, Provider, Type} from '@angular/core';
import {FlControlHost} from 'flex-controls/controls';
import {ComponentType} from 'flex-controls/types';

export const FL_CONTROL_HOST: InjectionToken<ComponentType<FlControlHost<unknown>>> = new InjectionToken<
    ComponentType<FlControlHost<unknown>>
>('FL_CONTROL_HOST');

export function provideControlHost<T extends FlControlHost<unknown>>(componentOrDirective: Type<T>): Provider {
    return {
        provide: FL_CONTROL_HOST,
        useExisting: forwardRef(() => componentOrDirective),
    };
}
