import {Directive} from '@angular/core';
import {FlControl} from 'flex-controls';

@Directive({
    selector: '[flexControlsControl]',
})
export class ControlDirective<T> extends FlControl<T> {
    constructor() {
        super();
    }
}
