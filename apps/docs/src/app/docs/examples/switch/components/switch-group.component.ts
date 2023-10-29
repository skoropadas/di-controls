import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIArrayControl, provideHostControl} from 'di-controls';

@Component({
	standalone: true,
	selector: 'di-switch-group',
	template: `<ng-content/>`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule],
	providers: [provideHostControl(SwitchGroupComponent)],
})
export class SwitchGroupComponent<T = unknown> extends DIArrayControl<T> {
	constructor() {
		super();
	}
}
