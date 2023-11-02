import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { ComboboxDemoComponent } from './demos/combobox-demo.component';
import { ComboboxRadioDemoComponent } from './demos/combobox-radio-demo.component';
import { ComboboxObjectDemoComponent } from './demos/combobox-object-demo.component';

const ComboboxPage: NgDocPage = {
  title: `Combobox`,
  mdFile: './index.md',
  category: ExamplesCategory,
  demos: { ComboboxDemoComponent, ComboboxRadioDemoComponent, ComboboxObjectDemoComponent },
  keyword: 'ComboboxPage',
};

export default ComboboxPage;
