import {enableProdMode} from '@angular/core';

import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {bootstrapApplication} from '@angular/platform-browser';
import {
	NG_DOC_DEFAULT_PAGE_PROCESSORS,
	NG_DOC_DEFAULT_PAGE_SKELETON, NG_DOC_NIGHT_THEME,
	NgDocDefaultSearchEngine,
	provideMainPageProcessor,
	provideNgDocApp,
	providePageSkeleton,
	provideSearchEngine
} from '@ng-doc/app';
import {NG_DOC_ROUTING, provideNgDocContext} from '@ng-doc/generated';
import {provideHttpClient} from '@angular/common/http';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
		provideNgDocContext(),
		provideNgDocApp({defaultThemeId: NG_DOC_NIGHT_THEME.id}),
		provideSearchEngine(NgDocDefaultSearchEngine),
		providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
		provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
        provideAnimations(),
		provideHttpClient(),
		provideRouter(
			NG_DOC_ROUTING,
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			}),
		),
    ]
})
  .catch((err) => console.error(err));
