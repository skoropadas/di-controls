import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
import {DIControl} from 'di-controls';
import {parse, format} from 'date-fns';

@Directive({
	selector: 'input[diInputDate]',
	standalone: true,
})
export class InputDateDirective extends DIControl<Date> {
	@Input()
	format: string = 'dd-MM-yyyy';

	protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

	constructor() {
		super();
	}

	@HostListener('input')
	protected onInput(): void {
		this.updateModel(parse(this.inputElement.value, this.format, new Date()));
	}

	@HostListener('blur')
	protected onBlur(): void {
		this.touch();
	}

	protected override incomingUpdate(value: Date | null): void {
		super.incomingUpdate(value);

		this.inputElement.value = value ? format(value, this.format) : '';
	}
}
