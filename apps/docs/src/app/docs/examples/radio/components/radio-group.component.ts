import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIControl, provideHostControl } from 'di-controls';

@Component({
	selector: 'di-radio-group',
	standalone: true,
	imports: [CommonModule],
	template: ` <ng-content></ng-content>`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
		`,
	],
	providers: [provideHostControl(RadioGroupComponent)],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent<T = unknown> extends DIControl<T> {
	constructor() {
		super();
	}
}
