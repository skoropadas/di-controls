import { isPresent } from './is-present';

export function hasValue<T>(value: T | null | undefined): value is T {
	return (
		isPresent(value) &&
		((Array.isArray(value) && !!value.length) ||
			(typeof value === 'string' && !!value.length) ||
			(!['string'].includes(typeof value) && !Array.isArray(value)))
	);
}
