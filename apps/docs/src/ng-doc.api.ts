import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
		{
			name: 'di-controls',
			route: 'di-controls',
			include: ['libs/di-controls/index.ts'],
		},
	],
};

export default Api;
