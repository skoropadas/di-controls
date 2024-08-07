import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CheckboxComponent} from '../components/checkbox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {CheckboxGroupComponent} from '../components/checkbox-group.component';
import {Fruit, FRUITS} from '../../../../constants/fruits';
import {CompareByIdDirective} from '../components/compare-by-id.directive';

// snippet-from-file="../components/checkbox-group.component.ts"
// snippet-from-file="../components/checkbox.component.ts"
// snippet-from-file="../components/compare-by-id.directive.ts"

@Component({
  selector: 'di-checkbox-group-object',
  standalone: true,
  imports: [
    CommonModule,
    CheckboxComponent,
    ModelInfoComponent,
    ReactiveFormsModule,
    CheckboxGroupComponent,
    CompareByIdDirective,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-checkbox-group [formControl]="control" diCompareById>
        <di-checkbox *ngFor="let item of items" [value]="item">{{ item.name }}</di-checkbox>
      </di-checkbox-group>
      <!-- snippet -->
    </di-model-info>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupObjectComponent {
  control: FormControl<Fruit[] | null> = new FormControl<Fruit[]>([{ id: 1, name: 'Apple' }]);
  items: Fruit[] = FRUITS;
}
