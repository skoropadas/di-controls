import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DICompareFunction,
  DICompareHost,
  DIControl,
  DIStateControl,
  provideCompareHost,
  provideHostControl,
} from 'di-controls';
import { InputStringDirective } from '../../inputs/components/input-string.directive';
import { ComboboxInputDirective } from './combobox-input.directive';

@Component({
  selector: 'di-combobox',
  standalone: true,
  imports: [CommonModule, InputStringDirective, ComboboxInputDirective],
  template: `
    <input diInputString [diComboboxInput]="stringifyFn" (focus)="open()" (blur)="touch()" />

    <div class="dropdown" *ngIf="opened">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: inline-block;
        width: 150px;

        .dropdown {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: 100%;
          color: #000;
          border: 1px solid #ccc;
          background: #fff;
          z-index: 1;
        }
      }
    `,
  ],
  providers: [
    // Provide this component as a host for all children
    provideHostControl(ComboboxComponent),
    // Provide this component as a compare host for all children to get access to its compare function
    provideCompareHost(ComboboxComponent),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxComponent<T> extends DIControl<T> implements DICompareHost<T> {
  // For comparing immutable objects
  @Input()
  compareFn: DICompareFunction<T> = (a, b) => a === b;

  // To convert value to string for input
  @Input()
  stringifyFn: (value: T) => string = String;

  protected opened: boolean = false;

  constructor() {
    super({
      onChildControlChange: (control: DIControl<T>) => {
        // Close dropdown if value was selected
        if (control instanceof DIStateControl) {
          this.close();
        }
      },
    });
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }
}
