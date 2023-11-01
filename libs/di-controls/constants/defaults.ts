import { DICompareFunction } from 'di-controls/types';

export const DI_DEFAULT_COMPARE: DICompareFunction = (value1: unknown, value2: unknown) =>
	value1 === value2;
