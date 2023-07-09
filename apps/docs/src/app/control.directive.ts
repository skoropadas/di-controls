import {Directive} from '@angular/core';
import {DIControl} from 'libs/di-controls';

@Directive({
	selector: '[flexControlsControl]',
})
export class ControlDirective<T> extends DIControl<T> {
	constructor() {
		super();
	}
}
