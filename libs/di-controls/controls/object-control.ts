import {Directive} from '@angular/core';
import {DIObjectControlGetValue, DIObjectControlSetValue} from '../types';
import {DIControl} from './control';

/** Uses to implement host that stores value to an object key */
@Directive()
export abstract class DIObjectControl<TModel, TChildModel> extends DIControl<TModel, TChildModel> {
	protected constructor(
		private getValue: DIObjectControlGetValue<TModel, TChildModel>,
		private setValue: DIObjectControlSetValue<TModel, TChildModel>,
		protected override host?: DIControl<unknown, TModel> | null,
	) {
		super(host);
	}

	override registerControl(control: DIControl<TChildModel>): void {
		this.children.add(control);

		/*
		 * We have to update control because its can be created dynamically.
		 * We use Promise.resolve because NgModel uses it too to set first value (https://github.com/angular/angular/blob/7df9127088bda3c9d29937a04287b87dc2045ea7/packages/forms/src/directives/ng_model.ts#L314)
		 * so there's no need to use angular life cycle hooks
		 */
		Promise.resolve().then(() => control.writeValueFromHost(this.getValue(this.model())));

		control.registerOnControlChange((value: TChildModel | null) => {
			this.updateFrom = control;
			this.updateModel(this.setValue(this.model(), value));
		});

		control.registerRequestForUpdate(() => {
			control.writeValueFromHost(this.getValue(this.model()));
		});
	}

	protected override incomingUpdate(obj: TModel | null): void {
		this.updateControls(obj);
	}

	protected override updateControl(control: DIControl<TChildModel>, value: TModel | null): void {
		control.writeValueFromHost(this.getValue(value));
	}
}
