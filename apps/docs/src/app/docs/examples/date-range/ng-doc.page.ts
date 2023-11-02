import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { DateRangeDemoComponent } from './demos/date-range-demo.component';

const DateRangePage: NgDocPage = {
  title: `Date Range`,
  mdFile: './index.md',
  category: ExamplesCategory,
  demos: { DateRangeDemoComponent },
  keyword: 'DateRangePage',
};

export default DateRangePage;
