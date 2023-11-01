import {DICompareFunction} from 'di-controls/types';
import {Provider, Type} from '@angular/core';

/** Uses to implement host with compare function */
export abstract class DICompareHost<T> {
	/** Uses to compare two values (useful to compare two objects, for example by id) */
	abstract compareFn: DICompareFunction<T>;
}

export function provideCompareHost<T extends DICompareHost<any>>(useExisting: Type<T>): Provider {
	return {
		provide: DICompareHost,
		useExisting,
	};
}
