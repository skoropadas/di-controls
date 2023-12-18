import {ApplicationConfig} from '@angular/core';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {
	NG_DOC_DEFAULT_PAGE_PROCESSORS,
	NG_DOC_DEFAULT_PAGE_SKELETON,
	NG_DOC_NIGHT_THEME,
	NgDocDefaultSearchEngine, provideMainPageProcessor,
	provideNgDocApp, providePageSkeleton,
	provideSearchEngine
} from '@ng-doc/app';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';
import {provideClientHydration} from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
	providers: [
		provideNgDocContext(),
		provideNgDocApp({defaultThemeId: NG_DOC_NIGHT_THEME.id}),
		provideSearchEngine(NgDocDefaultSearchEngine),
		providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
		provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
		provideAnimations(),
		provideHttpClient(),
		provideRouter(
			[
				...NG_DOC_ROUTING,
				{
					path: '**',
					redirectTo: 'getting-started/installation',
					pathMatch: 'full',
				},
			],
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
			withViewTransitions()
		),
		provideClientHydration(),
	],
}
