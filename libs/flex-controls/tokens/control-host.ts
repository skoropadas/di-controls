import {InjectionToken} from '@angular/core';
import {FlControlHost} from 'flex-controls/controls';
import {ComponentType} from 'flex-controls/types';

export const FL_CONTROL_HOST: InjectionToken<ComponentType<FlControlHost<unknown>>> = new InjectionToken<
    ComponentType<FlControlHost<unknown>>
>('FL_CONTROL_HOST');
