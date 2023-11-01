import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { DIStateControl, injectHostControl } from 'di-controls';

@Component({
	selector: 'di-option',
	standalone: true,
	template: `<ng-content></ng-content>`,
	styles: [
		`
			:host {
				display: block;
				cursor: pointer;

				&:hover {
					background-color: #e6f7ff;
				}

				&[aria-checked='true'] {
					background-color: #71e2ff;
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent<T> extends DIStateControl<T> {
	constructor() {
		super({
			host: injectHostControl({ optional: true }),
		});
	}

	@HostListener('click')
	onClick() {
		this.check();
	}
}
