import {Directive} from '@angular/core';
import {DICompareHost, provideCompareHost} from 'di-controls';

interface WithId {
  id: number | string;
}

@Directive({
  selector: '[diCompareById]',
  standalone: true,
  providers: [provideCompareHost(CompareByIdDirective)],
})
export class CompareByIdDirective<T extends WithId> implements DICompareHost<T> {
  compareFn = (a: T | null, b: T | null) => a?.id === b?.id;
}
