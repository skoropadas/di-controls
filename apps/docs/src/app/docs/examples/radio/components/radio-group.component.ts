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
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    `,
  ],
  providers: [
    // Provide this component as a host for all children
    provideHostControl(RadioGroupComponent),
    // Provide this component as a compare host for all children to get access to its compare function
    provideCompareHost(RadioGroupComponent),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent<T = unknown> extends DIControl<T> implements DICompareHost<T> {
  // For comparing immutable objects
  @Input()
  compareFn: DICompareFunction<T> = (a, b) => a === b;

  constructor() {
    super();
  }
}
