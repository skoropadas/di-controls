// eslint-disable-next-line @typescript-eslint/ban-types
export type AbstractConstructor<T> = Function & { prototype: T };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;
