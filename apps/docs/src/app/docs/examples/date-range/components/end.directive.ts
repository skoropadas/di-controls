import { Directive } from '@angular/core';
import {DIProxyControl, injectHostControl, provideHostControl} from 'di-controls';
import {DateRange} from './date-range.component';

@Directive({
	selector: '[diEnd]',
	standalone: true,
	providers: [provideHostControl(EndDirective)],
})
export class EndDirective extends DIProxyControl<DateRange, Date>{
	constructor() {
		super({
			getValue: (obj: DateRange | null) => obj?.end ?? null,
			setValue: (obj: DateRange | null, end: Date | null) => ({ end, start: obj?.start ?? null }),
			host: injectHostControl({skipSelf: true}),
		})
	}
}
