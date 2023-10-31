import { DI_DEFAULT_COMPARE } from '../constants';
import { DICompareFunction } from '../types';

export class SetCompare<T> implements Iterable<T> {
	private values: Set<T> = new Set<T>();
	private readonly compareFn: DICompareFunction<T>;

	constructor(compareFn?: DICompareFunction<T>, newValues?: T[] | null) {
		this.compareFn = compareFn || DI_DEFAULT_COMPARE;
		this.values = new Set<T>(newValues || []);
	}

	get size(): number {
		return this.values.size;
	}

	*[Symbol.iterator](): Iterator<T> {
		for (const value of this.values) {
			yield value;
		}
	}

	add(value: T): void {
		const item: T | null = this.find(value);
		!item && this.values.add(value);
	}

	delete(value: T): void {
		const item: T | null = this.find(value);
		item && this.values.delete(item);
	}

	has(value: T): boolean {
		return this.values.has(value) || !!this.find(value);
	}

	clear(): void {
		this.values = new Set<T>();
	}

	toArray(): T[] {
		return Array.from(this.values);
	}

	private find(value: T): T | null {
		/* trying to find element as is, because its the fastest way */
		if (this.values.has(value)) {
			return value;
		}

		/* if we didn't find it then trying to use compare function to do that */
		for (const v of this.values) {
			if (this.compareFn(value, v)) {
				return v;
			}
		}
		return null;
	}
}
