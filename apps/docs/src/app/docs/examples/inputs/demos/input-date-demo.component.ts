import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {InputDateDirective} from '../components/input-date.directive';

// snippet-from-file="../components/input-date.directive.ts"

@Component({
  selector: 'di-input-date-demo',
  standalone: true,
  imports: [CommonModule, ModelInfoComponent, ReactiveFormsModule, InputDateDirective],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <input diInputDate [formControl]="control" />
      <!-- snippet -->
    </di-model-info>
  `,
})
export class InputDateDemoComponent {
  control: FormControl<Date | null> = new FormControl<Date | null>(new Date());
}
