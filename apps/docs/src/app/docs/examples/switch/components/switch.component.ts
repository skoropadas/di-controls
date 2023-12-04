import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DICompareHost, DIStateControl, injectHostControl } from 'di-controls';

@Component({
  standalone: true,
  selector: 'di-switch',
  template: `
    <button type="button" (click)="toggle(); touch()">
      <span [class.checked]="checked()"></span>
    </button>
    <ng-content />
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;

        & > button {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          height: 20px;
          width: 40px;
          padding: 2px;
          border: none;
          border-radius: 100px;
          cursor: pointer;

          & > span {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            background-color: #808080;
            border-radius: 100px;
            transition: 0.25s;

            &.checked {
              margin-left: 20px;
              background-color: #14c814;
            }
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class SwitchComponent<T> extends DIStateControl<T | boolean> {
  @Input()
  override value: T | boolean = true;

  constructor() {
    super({
      uncheckValue: false,
      host: injectHostControl({ optional: true }),
      compareHost: inject(DICompareHost, { optional: true }),
    });
  }
}
