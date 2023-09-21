import {NgDocPage} from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import {InputStringDemoComponent} from './demos/input-string-demo.component';
import {InputNumberDemoComponent} from './demos/input-number-demo.component';
import {InputDateDemoComponent} from './demos/input-date-demo.component';

const InputsPage: NgDocPage = {
	title: `Inputs`,
	mdFile: './index.md',
	category: ExamplesCategory,
	demos: {InputStringDemoComponent, InputNumberDemoComponent, InputDateDemoComponent}
};

export default InputsPage;
