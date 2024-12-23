import {Directive, forwardRef, Input} from '@angular/core';
import {DIProxyControl, injectHostControl, provideHostControl} from 'di-controls';

@Directive({
  selector: '[diComboboxInput]',
  standalone: true,
  providers: [
    // Provide this directive as a host to make it a host for the input
    provideHostControl(forwardRef(() => ComboboxInputDirective)),
  ],
})
export class ComboboxInputDirective<T> extends DIProxyControl<T, string> {
  // Function to convert value to string
  // We can use it to get value that will be displayed in input
  @Input({ required: true, alias: 'diComboboxInput' })
  stringifyFn: (value: T) => string = String;

  constructor() {
    super({
      // Inject host control (combobox) to get access to its model
      // We use `skipSelf` to skip this directive because it's a host
      host: injectHostControl({skipSelf: true}),
      // Convert selected value in combobox to string for input
      getValue: (value) => (value ? this.stringifyFn(value) : ''),
      // Clear combobox model when input's changed
      setValue: () => null,
    });
  }
}
