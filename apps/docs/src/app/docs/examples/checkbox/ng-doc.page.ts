import {NgDocPage} from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import {CheckboxDemoComponent} from './demos/checkbox-demo.component';
import {CheckboxGroupDemoComponent} from './demos/checkbox-group-demo.component';
import {CheckboxGroupObjectComponent} from './demos/checkbox-group-object.component';
import {CheckboxObjectComponent} from './demos/checkbox-object.component';

const CheckboxPage: NgDocPage = {
	title: `Checkbox`,
	mdFile: './index.md',
	category: ExamplesCategory,
	demos: {
		CheckboxDemoComponent,
		CheckboxObjectComponent,
		CheckboxGroupDemoComponent,
		CheckboxGroupObjectComponent,
	},
};

export default CheckboxPage;
