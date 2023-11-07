import {NgDocPage} from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import {SliderDemoComponent} from './demos/slider-demo.component';

const SliderPage: NgDocPage = {
  title: `Slider`,
  mdFile: './index.md',
  category: ExamplesCategory,
  demos: {
    SliderDemoComponent,
  },
  keyword: 'SliderPage'
};

export default SliderPage;
