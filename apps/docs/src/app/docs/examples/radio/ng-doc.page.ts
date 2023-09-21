import {NgDocPage} from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import {RadioDemoComponent} from './demos/radio-demo.component';
import {RadioObjectDemoComponent} from './demos/radio-object-demo.component';

const RadioPage: NgDocPage = {
	title: `Radio`,
	mdFile: './index.md',
	category: ExamplesCategory,
	demos: {
		RadioDemoComponent,
		RadioObjectDemoComponent,
	},
	keyword: 'RadioPage',
};

export default RadioPage;
