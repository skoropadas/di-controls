import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DICompareHost, DIStateControl, injectHostControl} from 'di-controls';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'di-slider',
  template: `
    <input
      type="range"
      [min]="min"
      [max]="max"
      [step]="step"
      [ngModel]="model()"
      (ngModelChange)="updateModel($event); touch()">
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class SliderComponent<T = number> extends DIStateControl<T> {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 5;

  constructor() {
    super({
      host: injectHostControl({ optional: true }),
      compareHost: inject(DICompareHost, { optional: true }),
    });
  }
}
