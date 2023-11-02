import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
export class RadioComponent<T = boolean> extends DIStateControl<T> {
  constructor() {
    super({
      host: injectHostControl({ optional: true }),
      compareHost: inject(DICompareHost, { optional: true }),
    });
  }
}
