import { Directive } from '@angular/core';
import { provideHostControl } from 'di-controls/tokens';
import { DIControl } from 'di-controls/controls';

@Directive({
	selector: '[diControlSilencer]',
	standalone: true,
	providers: [provideHostControl(DIControlSilencerDirective)],
})
export class DIControlSilencerDirective extends DIControl<unknown> {
	constructor() {
		super();
	}

	override registerControl() {
		// do nothing
	}

	override unregisterControl() {
		// do nothing
	}
}
