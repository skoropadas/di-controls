export type DICompareFunction<TValue1 = unknown, TValue2 extends TValue1 = TValue1> = (
	value1: TValue1,
	value2: TValue2,
) => boolean;
