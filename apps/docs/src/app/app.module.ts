import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {ControlDirective} from './control.directive';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, ControlDirective],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
