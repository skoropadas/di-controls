import {Directive, ElementRef, HostListener, inject} from '@angular/core';
import {DIControl} from 'di-controls';

@Directive({
	selector: 'input[diInputString]',
	standalone: true,
})
export class InputStringDirective<T = unknown> extends DIControl<T> {
	protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

	constructor() {
		super();
	}

	@HostListener('input')
	protected onInput(): void {
		this.updateModel(this.inputElement.value as unknown as T);
	}

	@HostListener('blur')
	protected onBlur(): void {
		this.touch();
	}

	protected override incomingUpdate(value: T | null): void {
		super.incomingUpdate(value);

		this.inputElement.value = String(value ?? '');
	}
}
