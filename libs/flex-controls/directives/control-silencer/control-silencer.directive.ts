import {Directive} from '@angular/core';
import {FlControlHost, provideControlHost} from 'flex-controls';

@Directive({
    selector: '[flControlSilencer]',
    providers: [provideControlHost(FlControlSilencerDirective)],
})
export class FlControlSilencerDirective extends FlControlHost<unknown> {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    override registerControl() {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    override unregisterControl() {}
}
