import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DI_HOST_CONTROL, DICompareHost, DIStateControl} from 'di-controls';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'di-radio',
	standalone: true,
	imports: [CommonModule, FormsModule],
	template: `
		<label>
			<input
				type="radio"
				[checked]="checked()"
				(change)="check(); touch()"/>
			<ng-content></ng-content>
		</label>
	`,
	styles: [
		`
			:host {
				display: inline-flex;
				align-items: center;
				gap: 8px;

				label {
					display: flex;
					gap: 4px;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent<T = unknown> extends DIStateControl<T> {
	constructor() {
		super(inject(DI_HOST_CONTROL, {optional: true}), inject(DICompareHost, {optional: true}));
	}
}
