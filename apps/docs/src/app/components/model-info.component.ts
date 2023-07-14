import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
	selector: 'di-model-info',
	standalone: true,
	imports: [CommonModule],
	template: `
		<div class="control">
			<ng-content></ng-content>
		</div>
		<div class="control-info">
			<div class="row">
				<b>Model:</b>
				{{ control.value | json }}
			</div>
			<div class="row">
				<b>Touched:</b>
				{{ control.touched }}
			</div>
			<div class="row">
				<b>Dirty:</b>
				{{ control.dirty }}
			</div>
			<button (click)="control.reset()">Reset</button>
		</div>
	`,
	styles: [
		`
			:host {
				display: flex;
				flex-direction: column;
				gap: 16px;

				.control-info {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 8px;
					background: var(--ng-doc-base-2);
					padding: 16px;
				}
			}
		`,
	],
})
export class ModelInfoComponent {
	@Input({required: true})
	control!: FormControl;
}
