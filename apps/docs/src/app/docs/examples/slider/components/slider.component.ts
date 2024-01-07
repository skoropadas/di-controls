import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIControl, injectHostControl } from 'di-controls';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'input[type="range"][di-slider]',
  template: `
    <input
      type="range"
      [ngModel]="model()"
      (ngModelChange)="updateModel($event); touch()">
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule]
})
export class SliderComponent extends DIControl<number> {
  protected readonly inputElement: HTMLInputElement = inject(ElementRef).nativeElement;

  constructor() {
    super({
      host: injectHostControl({ optional: true }),
      onIncomingUpdate: (value: number | null): void => {
        this.inputElement.value = String(value ?? 0);
      },
    });
  }

  @HostListener('input')
  protected onInput(): void {
    this.updateModel(Number(this.inputElement.value));
  }

  @HostListener('blur')
  protected onBlur(): void {
    this.touch();
  }
}
