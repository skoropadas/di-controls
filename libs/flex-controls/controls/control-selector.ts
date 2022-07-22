import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FlCompareHost} from 'flex-controls/classes';
import {FL_DEFAULT_COMPARE} from 'flex-controls/constants';
import {flMakePure} from 'flex-controls/decorators';
import {FlBaseControlHost} from 'flex-controls/interfaces';
import {FlControl} from './control';

/** Uses to implement controls with state (like checkbox, radio-button, chip, etc.) */
@Directive()
export abstract class FlControlSelector<T> extends FlControl<T | boolean> implements OnChanges {
    @Input()
    value: T | true = true;

    constructor(
        protected compareHost?: FlCompareHost<T | boolean | null>,
        protected override host?: FlBaseControlHost<T>,
        protected hasIntermediate?: boolean,
    ) {
        super(host);
    }

    ngOnChanges({value}: SimpleChanges): void {
        /*
         * We have to request host for updates, because when we use ngFor directive
         * with trackBy function, Angular doesn't re-create components, it just changes their inputs,
         * so we have to request for updates our host, to determine right checked state
         */
        if (value) {
            this.requestUpdate();
        }
    }

    /** Выбирает текущее значение  */
    select(): void {
        this.updateModel(this.value);
    }

    /** Снимает выделение */
    deselect(): void {
        this.updateModel(false);
    }

    /** Устанавливает состояние intermediate */
    intermediate(): void {
        this.updateModel(null);
    }

    /** Инвертирует текущее состояние */
    toggle(): void {
        this.updateModel(this.checked === false ? this.value : false);
    }

    @HostBinding('attr.data-intermediate')
    get isIntermediate(): boolean {
        return this.model === null && !!this.hasIntermediate;
    }

    @HostBinding('attr.data-checked')
    get checked(): boolean | null {
        return this.compare(this.value, this.model) ? true : this.isIntermediate ? null : false;
    }

    @flMakePure
    protected compare(value1: T | boolean | null, value2: T | boolean | null): boolean {
        return this.compareHost?.compareFn(value1, value2) ?? FL_DEFAULT_COMPARE(value1, value2);
    }
}
