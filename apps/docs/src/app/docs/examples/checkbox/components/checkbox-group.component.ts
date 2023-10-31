import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIArrayControl, provideHostControl } from 'di-controls';

@Component({
	selector: 'di-checkbox-group',
	standalone: true,
	imports: [CommonModule],
	template: `<ng-content></ng-content>`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}
		`,
	],
	providers: [provideHostControl(CheckboxGroupComponent)],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent<T = unknown> extends DIArrayControl<T> {
	constructor() {
		super();
	}
}
