import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from '../components/switch.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SwitchGroupComponent} from '../components/switch-group.component';
import {FRUIT_NAMES} from '../../../../constants/fruits';

// snippet-from-file="../components/switch.component.ts"
// snippet-from-file="../components/switch-group.component.ts"

@Component({
  standalone: true,
  selector: 'di-switch-group-demo',
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-switch-group [formControl]="control">
        <di-switch *ngFor="let item of items" [value]="item">{{ item }}</di-switch>
      </di-switch-group>
      <!-- snippet -->
    </di-model-info>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SwitchComponent,
    ReactiveFormsModule,
    ModelInfoComponent,
    SwitchGroupComponent,
  ],
})
export class SwitchGroupDemoComponent {
  control: FormControl<string[] | null> = new FormControl<string[]>([FRUIT_NAMES[2]]);
  items: string[] = FRUIT_NAMES;
}
