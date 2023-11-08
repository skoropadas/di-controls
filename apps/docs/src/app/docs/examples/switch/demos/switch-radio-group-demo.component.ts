import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxGroupComponent} from '../../checkbox/components/checkbox-group.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {SwitchComponent} from '../components/switch.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {FRUIT_NAMES} from '../../../../constants/fruits';
import {RadioGroupComponent} from '../../radio/components/radio-group.component';

// snippet-from-file="../components/switch.component.ts"
// snippet-from-file="../../radio/components/radio-group.component.ts"

@Component({
  selector: 'di-switch-radio-group-demo',
  standalone: true,
  imports: [
    CommonModule,
    RadioGroupComponent,
    ModelInfoComponent,
    SwitchComponent,
    ReactiveFormsModule,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-radio-group [formControl]="control">
        <di-switch *ngFor="let item of items" [value]="item">{{ item }}</di-switch>
      </di-radio-group>
      <!-- snippet -->
    </di-model-info>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchRadioGroupDemoComponent {
  control: FormControl<string[] | null> = new FormControl<string[]>([FRUIT_NAMES[2]]);
  items: string[] = FRUIT_NAMES;
}
