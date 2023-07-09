import {InjectionToken, Provider, Type} from '@angular/core';
import {DIControl} from '../controls';

export const DI_HOST_CONTROL: InjectionToken<DIControl<unknown>> = new InjectionToken<DIControl<unknown>>(
	'DI_HOST_CONTROL',
);

export function provideHostControl<T extends DIControl<any>>(useExisting: Type<T>): Provider {
	return {
		provide: DI_HOST_CONTROL,
		useExisting,
	};
}
