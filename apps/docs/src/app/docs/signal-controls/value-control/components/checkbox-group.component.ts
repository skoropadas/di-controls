import {ChangeDetectionStrategy, Component, forwardRef, inject} from '@angular/core';

import {DICollectionControl, DICompareHost, provideHostControl} from 'di-controls';

@Component({
  selector: 'di-checkbox-group',
  standalone: true,
  imports: [],
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
    provideHostControl(forwardRef(() => CheckboxGroupComponent)),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupComponent<T = unknown> extends DICollectionControl<T> {

  constructor() {
    super({
      compare: inject(DICompareHost, { optional: true }),
    });
  }
}
