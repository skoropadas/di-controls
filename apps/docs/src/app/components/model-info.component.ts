import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl} from '@angular/forms';
import {NgDocButtonComponent} from '@ng-doc/ui-kit';

@Component({
	selector: 'di-model-info',
	standalone: true,
	imports: [CommonModule, NgDocButtonComponent],
	template: `
		<div class="control">
			<ng-content></ng-content>
		</div>
		<ul class="control-info">
			<li>
				<label>Model:</label>
				<b>{{ control.value | json }}</b>
			</li>
			<li>
				<label>Touched:</label>
				<b>{{ control.touched }}</b>
			</li>
			<li>
				<label>Dirty:</label>
				<b>{{ control.dirty }}</b>
			</li>

			<li class="buttons">
				<button ng-doc-button (click)="control.reset()">Reset</button>
			</li>
		</ul>
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
					padding: 16px;
				}

				ul {
					list-style: none;
					padding: 0;
					margin: 0;

					li {
						width: 100%;

						label {
							color: var(--ng-doc-text-muted);
							margin-right: var(--ng-doc-base-gutter);
						}

						&:not(:last-child) {
							border-bottom: 1px solid var(--ng-doc-border-color);
						}
					}
				}

				.buttons {
					display: flex;
					gap: 8px;
					margin-top: calc(var(--ng-doc-base-gutter) * 2);
				}
			}
		`,
	],
})
export class ModelInfoComponent {
	@Input({required: true})
	control!: FormControl;
}
