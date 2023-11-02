import {ChangeDetectionStrategy, Component, HostListener, inject} from '@angular/core';
import {DICompareHost, DIStateControl, injectHostControl} from 'di-controls';

@Component({
  selector: 'di-option',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        cursor: pointer;

        &:hover {
          background-color: #e6f7ff;
        }

        &[aria-checked='true'] {
          background-color: #71e2ff;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent<T> extends DIStateControl<T> {
  constructor() {
    super({
      // Inject host control to get access to its model
      host: injectHostControl({ optional: true }),
      // Inject compare host to get access to its compare function
      compareHost: inject(DICompareHost, { optional: true }),
    });
  }

  @HostListener('click')
  onClick() {
    this.check();
  }
}
