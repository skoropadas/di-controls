import {ValueControl} from "./value-control";
import {computed, Directive, Signal} from "@angular/core";

@Directive()
export abstract class CheckboxControl<TChecked, TUnchecked> extends ValueControl<TChecked | TUnchecked> {
  abstract checkedValue: Signal<TChecked>;
  abstract uncheckedValue: Signal<TUnchecked>;

  isChecked = computed(() => this.value() === this.checkedValue());
}
