import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DICollectionControl, provideCompareHost, provideHostControl } from 'di-controls';

@Component({
  selector: 'di-checkbox-group',
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
    provideHostControl(CheckboxGroupComponent),
    // Provide this component as a compare host for all children to get access to its compare function
    provideCompareHost(CheckboxGroupComponent),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent<T = unknown> extends DICollectionControl<T> {
  constructor() {
    super();
  }
}
