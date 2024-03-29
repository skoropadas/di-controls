import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DICompareHost, DIStateControl, injectHostControl } from 'di-controls';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'di-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label>
      <input type="radio" [checked]="checked()" (change)="check(); touch()" />
      <ng-content></ng-content>
    </label>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        gap: 8px;

        label {
          display: flex;
          gap: 4px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent<T> extends DIStateControl<T | boolean> {
  @Input()
  override value: T | boolean = true;

  constructor() {
    super({
      host: injectHostControl({ optional: true }),
      compare: inject(DICompareHost, { optional: true }),
    });
  }
}
