import { Directive } from '@angular/core';
import {DIObjectControl, injectHostControl} from 'di-controls';

@Directive({
	selector: '[diComboboxInput]',
	standalone: true,
})
export class ComboboxInputDirective<T> extends DIObjectControl<T, string> {
	constructor() {
		super({
			host: injectHostControl(),
			// Convert selected value in combobox to string
			getValue: (value) => value ? String(value) : '',
			// Clear combobox model when input is changed
			setValue: () => null,
		});
	}
}
