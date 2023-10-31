import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { DIControl } from 'di-controls';

@Directive({
	selector: 'input[diInputNumber]',
	standalone: true,
})
export class InputNumberDirective extends DIControl<number> {
	protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

	constructor() {
		super({
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
