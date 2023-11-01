import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DIControl, DIStateControl, provideHostControl} from 'di-controls';
import {InputStringDirective} from '../../inputs/components/input-string.directive';
import {ComboboxInputDirective} from './combobox-input.directive';

@Component({
	selector: 'di-combobox',
	standalone: true,
	imports: [CommonModule, InputStringDirective, ComboboxInputDirective],
	template: `
		<input diInputString diComboboxInput (focus)="open()" (blur)="touch()"/>

		<div class="dropdown" *ngIf="opened">
			<ng-content></ng-content>
		</div>
	`,
	styles: [
		`
			:host {
				position: relative;
				display: inline-block;
				width: 150px;

				.dropdown {
					position: absolute;
					display: flex;
					flex-direction: column;
					width: 100%;
					border: 1px solid #ccc;
					background: #fff;
					z-index: 1;
				}
			}
		`,
	],
	providers: [provideHostControl(ComboboxComponent)],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent<T> extends DIControl<T> {
	opened: boolean = false;

	constructor() {
		super({
			onChildControlChange: (control: DIControl<T>) => {
				// Close dropdown if value was selected
				if (control instanceof DIStateControl) {
					this.close();
				}
			}
		});
	}

	open(): void {
		this.opened = true;
	}

	close(): void {
		this.opened = false;
	}
}
