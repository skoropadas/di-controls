import {Directive, Input} from '@angular/core';
import {DICompareHost, SetCompare} from '../classes';
import {DI_DEFAULT_COMPARE} from '../constants';
import {DICompareFunction} from '../types';
import {DIControl} from './control';
import {DIStateControl} from './state-control';

/** Uses to implement host that stores multiple values */
@Directive()
export abstract class DIArrayControl<TModel>
	extends DIControl<TModel[], TModel | TModel[]>
	implements DICompareHost<TModel>
{
	@Input()
	compareFn: DICompareFunction<TModel> = DI_DEFAULT_COMPARE;

	private proxyModel: SetCompare<TModel> = new SetCompare<TModel>();

	protected constructor(
		protected override host?: DIControl<unknown, TModel> | null,
		protected compareHost?: DICompareHost<TModel> | null,
	) {
		super(host);
	}

	override updateModel(obj: TModel[] | null): void {
		this.proxyModel = new SetCompare(this.compareFn, obj);

		super.updateModel(obj);
	}

	override writeValue(value: TModel[] | null) {
		this.proxyModel = new SetCompare(this.compareFn, value);

		super.writeValue(value);
	}

	override writeValueFromHost(obj: TModel[] | null) {
		this.proxyModel = new SetCompare(this.compareFn, obj);

		super.writeValueFromHost(obj);
	}

	protected override childControlChange(control: DIControl<TModel | TModel[]>, value: TModel[] | null) {
		this.updateFrom = control;
		this.updateModel(this.getNewModel(control, value));
		this.incomingUpdate(this.model());
	}

	private getNewModel(control: DIControl<TModel | TModel[]>, updates: TModel | TModel[] | null): TModel[] | null {
		if (control instanceof DIStateControl) {
			control.checked() ? this.proxyModel.add(control.value) : this.proxyModel.delete(control.value);
		} else if (Array.isArray(updates)) {
			this.proxyModel = new SetCompare<TModel>(this.compareFn, updates);
		} else {
			this.proxyModel = new SetCompare<TModel>(this.compareFn);

			return null;
		}

		return this.proxyModel.toArray();
	}

	protected override updateControl(control: DIControl<TModel | TModel[]>, value: TModel[] | null): void {
		if (control instanceof DIStateControl) {
			control.writeValueFromHost(this.proxyModel.has(control.value) ? control.value : false);
		} else {
			control.writeValueFromHost(this.model());
		}
	}
}
