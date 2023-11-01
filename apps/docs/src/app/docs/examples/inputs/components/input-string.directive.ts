import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import {DIControl, injectHostControl} from 'di-controls';

@Directive({
	selector: 'input[diInputString]',
	standalone: true,
})
export class InputStringDirective<T = unknown> extends DIControl<T> {
	protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

	constructor() {
		super({
			host: injectHostControl({optional: true}),
			onIncomingUpdate: (value: T | null) => {
				this.inputElement.value = String(value ?? '');
			},
		});
	}

	@HostListener('input')
	protected onInput(): void {
		this.updateModel(this.inputElement.value as unknown as T);
	}

	@HostListener('blur')
	protected onBlur(): void {
		this.touch();
	}
}
