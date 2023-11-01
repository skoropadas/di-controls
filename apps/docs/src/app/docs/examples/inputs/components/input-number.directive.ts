import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import {DIControl, injectHostControl} from 'di-controls';

@Directive({
	selector: 'input[diInputNumber]',
	standalone: true,
})
export class InputNumberDirective extends DIControl<number> {
	protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

	constructor() {
		super({
			host: injectHostControl({optional: true}),
			onIncomingUpdate: (value: number | null) => {
				this.inputElement.value = String(value ?? '');
			},
		});
	}

	@HostListener('input')
	protected onInput(): void {
		this.updateModel(Number(this.inputElement.value));
	}

	@HostListener('blur')
	protected onBlur(): void {
		this.touch();
	}
}
