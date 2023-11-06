import { NgDocConfiguration } from '@ng-doc/builder';
import { ngKeywordsLoader } from '@ng-doc/keywords-loaders';

const config: NgDocConfiguration = {
	angularBuilder: 'webpack',
	cache: false,
	keywords: {
		loaders: [ngKeywordsLoader()],
	},
};

export default config;
