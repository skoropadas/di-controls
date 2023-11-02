import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from '../components/checkbox.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {Fruit} from '../../../../constants/fruits';

// snippet-from-file="../components/checkbox.component.ts"

@Component({
  selector: 'di-checkbox-object',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, ReactiveFormsModule, ModelInfoComponent],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-checkbox [formControl]="control" [value]="{ id: 1, name: 'Apple' }">Apple</di-checkbox>
      <!-- snippet -->
    </di-model-info>
  `,
})
export class CheckboxObjectComponent {
  control: FormControl<Fruit | false | null> = new FormControl<Fruit | false | null>(null);
}
