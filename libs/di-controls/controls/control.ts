import {Directive, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {DIControlValueAccessor} from './control-value-accessor';
import {EMPTY_FUNCTION} from '../constants';

/** Uses to implement any control that you want */
@Directive()
export abstract class DIControl<TModel, TChildModel = TModel>
	extends DIControlValueAccessor<TModel>
	implements OnInit, OnDestroy
{
	protected children: Set<DIControl<TChildModel>> = new Set<DIControl<TChildModel>>();
	protected updateFrom: WritableSignal<DIControl<TChildModel> | null> = signal(null);

	protected requestForUpdate: () => void = EMPTY_FUNCTION;
	protected override touch: () => void = () => this.host?.touch();
	private onControlChangeFn: (value: TModel | null) => void = EMPTY_FUNCTION;

	protected constructor(protected host?: DIControl<unknown, TModel> | null) {
		super();
	}

	ngOnInit(): void {
		/*
		 * We have to register control with Promise.resolve because NgModel uses it too to set first
		 * value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 */
		Promise.resolve().then(() => this.host?.registerControl(this));
	}

	registerControl(control: DIControl<TChildModel>): void {
		this.children.add(control);

		/*
		 * We have to update control because its can be created dynamically.
		 * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 * so there's no need to use angular life cycle hooks
		 */
		Promise.resolve().then(() => {
			this.updateControl(control, this.model());
		});

		control.registerOnControlChange((value: unknown | null) => {
			this.childControlChange(control, value as TModel | null);
		});

		control.registerRequestForUpdate(() => {
			this.updateControl(control, this.model());
		});
	}

	unregisterControl(control: DIControl<TChildModel>): void {
		this.children.delete(control);
	}

	override registerOnTouched(fn: () => void): void {
		this.touch = () => {
			fn();

			/**
			 * Touch host control to update its state
			 */
			this.host?.touch();
		};
	}

	registerOnControlChange(fn: (value: TModel | null) => void): void {
		this.onControlChangeFn = fn;
	}

	registerRequestForUpdate(fn: () => void): void {
		this.requestForUpdate = fn;
	}

	/** Updates model and run changes */
	override updateModel(value: TModel | null): void {
		super.updateModel(value);
		this.onControlChangeFn(value);
		this.updateControls(this.model());
	}

	override writeValue(value: TModel | null): void {
		if (this.model() !== value) {
			super.writeValue(value);
			this.updateControls(value);
			this.onControlChangeFn(value);
		}
	}

	protected override incomingUpdate(value: TModel | null): void {
		this.updateControls(value);
	}

	protected updateControls(value: TModel | null): void {
		this.children.forEach((control: DIControl<TChildModel>) => {
			if (control !== this.updateFrom()) {
				this.updateControl(control, value);
			}
		});
		this.updateFrom.set(null);
	}

	protected updateControl(control: DIControl<TChildModel>, value: TModel | null): void {
		control.writeValueFromHost(value as TChildModel);
	}

	protected childControlChange(control: DIControl<TChildModel>, value: TModel | null): void {
		if (this.model() !== value) {
			this.updateFrom.set(control);
			this.updateModel(value);
			this.incomingUpdate(value);
		}
	}

	ngOnDestroy(): void {
		this.host?.unregisterControl(this);
	}
}
