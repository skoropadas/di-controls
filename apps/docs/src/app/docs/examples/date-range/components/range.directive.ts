import {Directive, forwardRef, Input} from '@angular/core';
import { DIProxyControl, injectHostControl, provideHostControl } from 'di-controls';
import { DateRange } from './date-range.component';

@Directive({
  selector: '[diRange]',
  standalone: true,
  providers: [
    // Provide this component as a host for all children
    provideHostControl(forwardRef(() => RangeDirective))
  ],
})
export class RangeDirective extends DIProxyControl<DateRange, Date> {
  @Input({ required: true, alias: 'diRange' })
  key!: keyof DateRange;

  constructor() {
    super({
      // Getting value from the object to provide it to children
      getValue: (obj: DateRange | null) => obj?.[this.key] ?? null,
      // Setting value new value from children to the object
      setValue: (obj: DateRange | null, value: Date | null) => ({
        start: null,
        end: null,
        ...obj,
        [this.key]: value,
      }),
      // Inject host control (combobox) to get access to its model
      // We use `skipSelf` to skip this directive because it's a host
      host: injectHostControl({ skipSelf: true }),
    });
  }
}
