import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgDocNavbarComponent, NgDocRootComponent, NgDocSidebarComponent } from '@ng-doc/app';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'di-controls-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgDocRootComponent, RouterOutlet, NgDocNavbarComponent, NgDocSidebarComponent],
})
export class AppComponent {}
