import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../components/slider.component';
import { ModelInfoComponent } from '../../../../components/model-info.component';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

// snippet-from-file="../components/slider.component.ts"

@Component({
  standalone: true,
  selector: 'di-slider-demo',
  template: `
    <di-model-info [control]="control">
      <!-- snippet "Usage" opened -->
      <input
        min="0"
        step="5"
        max="100"
        di-slider
        type="range"
        [formControl]="control"/>
      <!-- snippet -->
    </di-model-info>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SliderComponent, ReactiveFormsModule, ModelInfoComponent]
})
export class SliderDemoComponent {
  control: FormControl<number | null> = new FormControl<number | null>(0);
}
