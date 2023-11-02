import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DICompareFunction,
  DICompareHost,
  DIControl,
  provideCompareHost,
  provideHostControl,
} from 'di-controls';

@Component({
  selector: 'di-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    `,
  ],
  providers: [provideHostControl(RadioGroupComponent), provideCompareHost(RadioGroupComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent<T = unknown> extends DIControl<T> implements DICompareHost<T> {
  @Input()
  compareFn: DICompareFunction<T> = (a, b) => a === b;

  constructor() {
    super();
  }
}
