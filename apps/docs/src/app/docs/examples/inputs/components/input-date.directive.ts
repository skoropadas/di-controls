import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';
import { DIControl, injectHostControl } from 'di-controls';
import { format, parse } from 'date-fns';

@Directive({
  selector: 'input[diInputDate]',
  standalone: true,
})
export class InputDateDirective extends DIControl<Date> {
  @Input()
  format: string = 'dd-MM-yyyy';

  protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

  constructor() {
    super({
      host: injectHostControl({ optional: true }),
      onIncomingUpdate: (value: Date | null) => {
        this.inputElement.value = value ? format(value, this.format) : '';
      },
      withNativeElementSupport: true,
    });
  }

  @HostListener('input')
  protected onInput(): void {
    this.updateModel(parse(this.inputElement.value, this.format, new Date()));
  }

  @HostListener('blur')
  protected onBlur(): void {
    this.touch();
  }
}
