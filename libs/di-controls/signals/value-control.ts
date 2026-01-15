import {
	DestroyRef,
	Directive,
	effect,
	inject,
	InjectOptions,
	model,
	ModelSignal,
	OnInit,
	Provider,
	signal,
	Type,
	untracked,
} from '@angular/core';
import {FormValueControl} from '@angular/forms/signals';

export function provideControl<T>(control: Type<ValueControl<T>>): Provider {
  return {
    provide: ValueControl,
    useExisting: control,
  };
}

export function injectControl<T>(): ValueControl<T>;
export function injectControl<T>(
	options?: InjectOptions & {
		optional?: false;
	},
): ValueControl<T>;
export function injectControl<T>(
	options: InjectOptions,
): ValueControl<T> | null;
export function injectControl<T>(
	options?: InjectOptions & {
		optional?: boolean;
	},
): ValueControl<T> | null {
	return options ? inject(ValueControl, options) : inject(ValueControl);
}


export interface ValueControlOptions<T> {
  host?: ValueControl<T>,
  onUpdate?: (value: T) => void
}

@Directive()
export abstract class ValueControl<T> implements FormValueControl<T>, OnInit {
  abstract value: ModelSignal<T>;

	touched = model<boolean>(false);
  private children = signal<Array<ValueControl<T>>>([]);

	// eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(protected options?: ValueControlOptions<T>) {
    inject(DestroyRef).onDestroy(() => options?.host?.unregisterChild(this));

    effect(() => {
      const value = this.value();

      options?.onUpdate?.(value);

      untracked(() => {
        const host = this.options?.host;

				// Propagate value to host
        if (host) {
          const newValue = host.computeValueBasedOnChild(this);

          if (newValue !== host.value()) {
            console.log('Setting host value to', value);
            host.value.set(newValue);
          }
        }

				// Propagate value to children
        this.children().forEach((child) => {
          const newValue = this.computeChildValue(value, child);

          if (newValue !== child.value()) {
            console.log('Setting children values to', value);
            child.value.set(newValue);
          }
        })
      })
    });

		// Propagate touched state to host
		effect(() => {
			if (this.touched()) {
				untracked(() => {
					const host = this.options?.host;
					if (host && !host.touched()) {
						host.touched.set(true);
					}
				})
			}
		});
  }

  ngOnInit(): void {
    // Registering in the ngOnInit to ensure that the main class is fully constructed
    this.options?.host?.registerChild(this)
  }

  registerChild(child: ValueControl<T>): void {
    child.value.set(this.value());
    this.children.update((children) => [...children, child]);
  }

  unregisterChild(child: ValueControl<T>): void {
    this.children.update((children) => children.filter((c) => c !== child));
  }

  protected computeChildValue(newValue: T, child: ValueControl<T>): T {
    return newValue;
  }

  protected computeValueBasedOnChild(child: ValueControl<T>): T {
    return child.value();
  }
}
