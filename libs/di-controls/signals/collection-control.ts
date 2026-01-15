import {ValueControl, ValueControlOptions} from "./value-control";
import {CheckboxControl} from "./checkbox-control";
import {Directive} from "@angular/core";

export interface CollectionControlOptions<T> extends ValueControlOptions<T[]>{
  compareFn?: (a: T, b: T) => boolean
}

@Directive()
export abstract class CollectionControl<T> extends ValueControl<T[]> {
  private compareFn: (a: T, b: T) => boolean;

	// eslint-disable-next-line @angular-eslint/prefer-inject
  protected constructor(protected override options?: CollectionControlOptions<T>) {
    super(options);

    this.compareFn = options?.compareFn ?? ((a, b) => a === b);
  }

  protected override computeChildValue(newValue: T[], child: ValueControl<T[]>): T[] {
    if (child instanceof CheckboxControl) {
      const includesChild = this.value()?.some(v => this.compareFn(v, child.checkedValue()));

      return includesChild ? child.checkedValue() : child.uncheckedValue()
    }

    return newValue;
  }

  protected override computeValueBasedOnChild(child: ValueControl<T[]>): T[] {
    if (child instanceof CheckboxControl) {
      const includesChild = this.value()?.some(v => this.compareFn(v, child.checkedValue()));

      if (child.isChecked() && !includesChild) {
        return [...this.value(), child.checkedValue()]
      } else if (!child.isChecked() && includesChild) {
        return this.value().filter(v => v !== child.checkedValue())
      }

      return this.value();
    }

    return child.value();
  }
}
