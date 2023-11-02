import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {InputNumberDirective} from '../components/input-number.directive';

// snippet-from-file="../components/input-number.directive.ts"

@Component({
  selector: 'di-input-number-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModelInfoComponent,
    InputNumberDirective,
    ReactiveFormsModule,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <input diInputNumber [formControl]="control" />
      <!-- snippet -->
    </di-model-info>
  `,
})
export class InputNumberDemoComponent {
  control: FormControl<number | null> = new FormControl<number | null>(0);
}
