import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { SwitchGroupDemoComponent } from './demos/switch-group-demo.component';
import { SwitchDemoComponent } from './demos/switch-demo.component';
import { SwitchObjectDemoComponent } from './demos/switch-object-demo.component';
import { SwitchGroupObjectDemoComponent } from './demos/switch-group-object-demo.component';

const SwitchPage: NgDocPage = {
	title: `Switch`,
	mdFile: './index.md',
	category: ExamplesCategory,
	demos: {
		SwitchDemoComponent,
		SwitchGroupDemoComponent,
		SwitchObjectDemoComponent,
		SwitchGroupObjectDemoComponent,
	},
	keyword: 'SwitchPage'
};

export default SwitchPage;
