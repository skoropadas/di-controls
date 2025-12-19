import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ComboboxComponent} from '../components/combobox.component';
import {FRUIT_NAMES} from '../../../../constants/fruits';
import {OptionComponent} from '../components/option.component';

// snippet-from-file="../components/combobox.component.ts"
// snippet-from-file="../components/combobox-input.directive.ts"
// snippet-from-file="../../inputs/components/input-string.directive.ts"
// snippet-from-file="../components/option.component.ts"

@Component({
  selector: 'di-combobox-demo',
  standalone: true,
  imports: [
    ModelInfoComponent,
    ComboboxComponent,
    OptionComponent,
    ReactiveFormsModule,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-combobox [formControl]="control">
        @for (item of items; track item) {
          <di-option [value]="item">{{ item }}</di-option>
        }
      </di-combobox>
      <!-- snippet -->
    </di-model-info>
    `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxDemoComponent {
  control: FormControl<string | null> = new FormControl<string | null>(null);
  items: string[] = FRUIT_NAMES;
}
