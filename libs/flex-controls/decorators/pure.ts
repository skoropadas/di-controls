/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
export function flMakePure<T>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  _target: Object,
  propertyKey: string,
  { get, enumerable, value }: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> {
  if (get) {
    return {
      enumerable,
      get(): T {
        // eslint-disable-next-line @typescript-eslint/typedef
        const value = get.call(this);

        Object.defineProperty(this, propertyKey, { enumerable, value });

        return value;
      }
    };
  }

  if (typeof value !== "function") {
    throw new Error("flPure can only be used with functions or getters");
  }

  // eslint-disable-next-line @typescript-eslint/typedef
  const original = value;

  return {
    enumerable,
    get(): T {
      let previousArgs: readonly unknown[] = [];
      let previousResult: any;

      // eslint-disable-next-line @typescript-eslint/typedef
      const patched = (...args: unknown[]) => {
        // eslint-disable-next-line @typescript-eslint/typedef
        if (previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index])) {
          return previousResult;
        }

        previousArgs = args;
        previousResult = original.apply(this, args);

        return previousResult;
      };

      Object.defineProperty(this, propertyKey, {
        value: patched
      });

      return patched as any;
    }
  };
}
