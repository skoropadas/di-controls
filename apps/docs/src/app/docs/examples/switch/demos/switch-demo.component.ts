import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent} from '../components/switch.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

// snippet-from-file="../components/switch.component.ts"

@Component({
  standalone: true,
  selector: 'di-switch-demo',
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-switch [formControl]="control">Switch</di-switch>
      <!-- snippet -->
    </di-model-info>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SwitchComponent, ReactiveFormsModule, ModelInfoComponent],
})
export class SwitchDemoComponent {
  control: FormControl<boolean | null> = new FormControl<boolean | null>(false);
}
