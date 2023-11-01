import { Directive } from '@angular/core';
import {DIProxyControl, injectHostControl, provideHostControl} from 'di-controls';
import {DateRange} from './date-range.component';

@Directive({
	selector: '[diStart]',
	standalone: true,
	providers: [provideHostControl(StartDirective)],
})
export class StartDirective extends DIProxyControl<DateRange, Date>{
	constructor() {
		super({
			getValue: (obj: DateRange | null) => obj?.start ?? null,
			setValue: (obj: DateRange | null, start: Date | null) => ({ start, end: obj?.end ?? null }),
			host: injectHostControl({skipSelf: true}),
		})
	}
}