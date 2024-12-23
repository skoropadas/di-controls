import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIControl, provideHostControl } from 'di-controls';

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

@Component({
  selector: 'di-date-range',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  providers: [
    // Provide this component as a host for all children
    provideHostControl(forwardRef(() => DateRangeComponent))
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeComponent extends DIControl<DateRange> {
  constructor() {
    super();
  }
}
