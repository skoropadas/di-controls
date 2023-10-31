import {Directive} from '@angular/core';
import {DIObjectControlGetValue, DIObjectControlSetValue} from '../types';
import {DIControl, DIControlConfig} from './control';

/**
 * Configuration for the `DIObjectControl`.
 */
export interface DIObjectControlConfig<TModel, TChildModel> extends DIControlConfig<TModel, TChildModel> {
	/**
	 * Function that will be used to get value from the current object model and set it to the child control
	 * when update is requested.
	 */
	getValue: DIObjectControlGetValue<TModel, TChildModel>;
	/**
	 * Function that will be used to set value to the object model when child control value is changed.
	 */
	setValue: DIObjectControlSetValue<TModel, TChildModel>;
}

/** Uses to implement host that stores value to an object key */
@Directive()
export abstract class DIObjectControl<TModel, TChildModel> extends DIControl<TModel, TChildModel> {
	protected constructor(
		protected override config: DIObjectControlConfig<TModel, TChildModel>,
	) {
		super(config);
	}

	override registerControl(control: DIControl<TChildModel>): void {
		this.children.add(control);

		/*
		 * We have to update control because its can be created dynamically.
		 * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 * so there's no need to use angular life cycle hooks
		 */
		Promise.resolve().then(() => control.writeValueFromHost(this.config.getValue(this.model())));

		control.registerOnControlChange((value: TChildModel | null) => {
			this.updateFrom = control;
			this.updateModel(this.config.setValue(this.model(), value));
		});

		control.registerRequestForUpdate(() => {
			control.writeValueFromHost(this.config.getValue(this.model()));
		});
	}

	protected override updateControl(control: DIControl<TChildModel>, value: TModel | null): void {
		control.writeValueFromHost(this.config.getValue(value));
	}
}
