import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {InputDateDirective} from '../../inputs/components/input-date.directive';
import {DateRange, DateRangeComponent} from '../components/date-range.component';
import {RangeDirective} from '../components/range.directive';

// snippet-from-file="../components/date-range.component.ts"
// snippet-from-file="../../inputs/components/input-date.directive.ts"
// snippet-from-file="../components/range.directive.ts"

@Component({
  selector: 'di-date-range-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModelInfoComponent,
    InputDateDirective,
    DateRangeComponent,
    RangeDirective,
    ReactiveFormsModule,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-date-range [formControl]="control">
        <label>
          Start
          <input diInputDate diRange="start" />
        </label>

        <label>
          End
          <input diInputDate diRange="end" />
        </label>
      </di-date-range>
      <!-- snippet -->
    </di-model-info>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangeDemoComponent {
  control: FormControl<DateRange | null> = new FormControl<DateRange | null>({
    start: new Date(),
    end: new Date(),
  });
}
