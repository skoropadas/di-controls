import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { RouterOutlet } from '@angular/router';
import {NgDocButtonIconComponent, NgDocIconComponent, NgDocTooltipDirective} from '@ng-doc/ui-kit';

@Component({
    selector: 'di-controls-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgDocRootComponent,
        RouterOutlet,
        NgDocNavbarComponent,
        NgDocSidebarComponent,
        NgDocButtonIconComponent,
        NgDocTooltipDirective,
        NgDocIconComponent,
    ]
})
export class AppComponent {}
