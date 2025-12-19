import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ModelInfoComponent} from '../../../../components/model-info.component';
import {SwitchComponent} from '../components/switch.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Fruit, FRUITS} from '../../../../constants/fruits';
import {CheckboxGroupComponent} from '../../checkbox/components/checkbox-group.component';

// snippet-from-file="../components/switch.component.ts"
// snippet-from-file="../../checkbox/components/checkbox-group.component.ts"

@Component({
  standalone: true,
  selector: 'di-switch-group-object-demo',
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-checkbox-group [formControl]="control">
        @for (item of items; track item) {
          <di-switch [value]="item">{{ item.name }}</di-switch>
        }
      </di-checkbox-group>
      <!-- snippet -->
    </di-model-info>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ModelInfoComponent,
    SwitchComponent,
    ReactiveFormsModule,
    CheckboxGroupComponent
  ],
})
export class SwitchGroupObjectDemoComponent {
  control: FormControl<Fruit[] | null> = new FormControl<Fruit[]>([{ id: 1, name: 'Apple' }]);
  items: Fruit[] = FRUITS;
}
