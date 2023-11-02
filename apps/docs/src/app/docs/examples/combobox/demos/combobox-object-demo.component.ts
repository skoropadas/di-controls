import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Fruit, FRUITS} from '../../../../constants/fruits';
import {ComboboxComponent} from '../components/combobox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {OptionComponent} from '../components/option.component';

// snippet-from-file="../components/combobox.component.ts"
// snippet-from-file="../components/combobox-input.directive.ts"
// snippet-from-file="../../inputs/components/input-string.directive.ts"
// snippet-from-file="../components/option.component.ts"

@Component({
  selector: 'di-combobox-object-demo',
  standalone: true,
  imports: [
    CommonModule,
    ComboboxComponent,
    ModelInfoComponent,
    OptionComponent,
    ReactiveFormsModule,
  ],
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <di-combobox [formControl]="control" [compareFn]="compareFruits" [stringifyFn]="displayFruit">
        <di-option *ngFor="let item of items" [value]="item">{{ item.name }}</di-option>
      </di-combobox>
      <!-- snippet -->
    </di-model-info>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxObjectDemoComponent {
  control: FormControl<Fruit | null> = new FormControl<Fruit | null>(null);
  items: Fruit[] = FRUITS;

  compareFruits(a: Fruit | null, b: Fruit | null): boolean {
    return !!a && !!b && a.id === b.id;
  }

  displayFruit(fruit: Fruit | null): string {
    return fruit?.name ?? '';
  }
}
