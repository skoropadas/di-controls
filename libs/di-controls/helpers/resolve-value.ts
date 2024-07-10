import {isSignal, Signal} from '@angular/core';

export function resolveValue<T>(variableOnSignal: T | Signal<T>): T {
	return isSignal(variableOnSignal) ? variableOnSignal() : variableOnSignal;
}
