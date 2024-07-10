import {DICompareFunction} from 'di-controls/types';
import {InputSignal, Provider, Type} from '@angular/core';

/** Uses to implement host with compare function */
export abstract class DICompareHost<TModel, TValue extends TModel = TModel> {
	/** Uses to compare two values (useful to compare two objects, for example by id) */
	abstract compareFn: DICompareFunction<TModel, TValue> | InputSignal<DICompareFunction<TModel, TValue>>;
}

/**
 * Provides `DICompareHost` as a component that should be used to compare two values
 *
 * @param useExisting - Existing class that implements `DICompareHost`
 */
export function provideCompareHost<T extends DICompareHost<any>>(useExisting: Type<T>): Provider {
	return {
		provide: DICompareHost,
		useExisting,
	};
}
