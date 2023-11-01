import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
		{
			name: 'di-controls',
			route: 'di-controls',
			include: [
				'libs/di-controls/classes/*.ts',
				'libs/di-controls/controls/*.ts',
				'libs/di-controls/directives/**/*.ts',
				'libs/di-controls/tokens/**/*.ts',
				'libs/di-controls/types/**/*.ts',
			],
		},
	],
};

export default Api;
