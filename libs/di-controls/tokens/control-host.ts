import {InjectionToken, Provider, Type} from '@angular/core';
import {DIControl} from '../controls';

export const DI_HOST_CONTROL: InjectionToken<DIControl<unknown>> = new InjectionToken<DIControl<unknown>>(
	'DI_HOST_CONTROL',
);

/**
 * Returns provider that can be used to provide host control. You can use it in the `providers` section
 * of your `@Component` or `@Directive`.
 *
 * ```ts {2} fileName="custom-control.component.ts"
 * @Component({
 * 	providers: [provideHostControl(CustomControlComponent)],
 * })
 * export class CustomControlComponent extends DIControl<string> {
 * 		constructor() {
 * 			super();
 * 		}
 * 	}
 * ```
 *
 * @param useExisting - The `@Component` or `@Directive` class that should be used as a host control.
 */
export function provideHostControl<T extends DIControl<any>>(useExisting: Type<T>): Provider {
	return {
		provide: DI_HOST_CONTROL,
		useExisting,
	};
}
