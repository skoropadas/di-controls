import {
	ChangeDetectionStrategy,
	Component,
	Input,
	QueryList,
	Type,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export interface ControlConfig<Control extends Type<unknown>> {
	control: Control;
	selector: string;
	inputs?: Record<string, unknown>;
}

export type ControlFn<TControl extends Type<unknown>> = () => ControlConfig<TControl>;

export interface FixtureConfig<
	TValue,
	THost extends Type<unknown>,
	TChildren extends Type<unknown>,
> {
	hostControlFn: ControlFn<THost>;
	nestedControls?: Array<ControlFn<TChildren>>;
	defaultValue: TValue;
}

export interface ITestComponent<
	TValue,
	THost extends Type<unknown>,
	TChildren extends Type<unknown>,
> {
	formControl: FormControl<TValue>;
	control: InstanceType<THost>;

	getTemplateModel(): TValue;

	nestedControls: Array<InstanceType<TChildren>>;
}

export interface Fixture<TValue, THost extends Type<unknown>, TChildren extends Type<unknown>>
	extends ITestComponent<TValue, THost, TChildren> {
	fixture: ComponentFixture<ITestComponent<TValue, THost, TChildren>>;
}

@Component({
	selector: 'di-cdr-test',
	template: '',
	standalone: true,
})
export class CdrTestComponent<T> {
	@Input()
	model?: T;
}

function mapInputs(inputs?: Record<string, unknown>): string[] {
	const stringify = (value: unknown) => JSON.stringify(value).replace(/"/g, "'");

	return Object.keys(inputs ?? {}).map((key) => `[${key}]="${stringify(inputs![key])}"`);
}

export async function createFixture<
	TValue,
	THost extends Type<unknown>,
	TChildren extends Type<unknown> = Type<unknown>,
>(config: FixtureConfig<TValue, THost, TChildren>): Promise<Fixture<TValue, THost, TChildren>> {
	const { control, selector, inputs } = config.hostControlFn();
	const nestedControls: Array<ControlConfig<TChildren>> = (config.nestedControls ?? []).map(
		(controlFn) => controlFn(),
	);
	const nestControlsTemplate = nestedControls
		.map(({ selector, inputs }) => `<div ${selector} ${mapInputs(inputs)}></div>`)
		.join('\n');
	const firstNestedControl = nestedControls[0]?.control ?? control;

	@Component({
    template: `
			<div ${selector} ${mapInputs(inputs)} [formControl]="formControl">
				${nestControlsTemplate}
			</div>
			<di-cdr-test [model]="formControl.value" #cdrTest></di-cdr-test>
		`,
    imports: [
        control,
        CdrTestComponent,
        ReactiveFormsModule,
        ...nestedControls.map(({ control }) => control),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
	class TestComponent implements ITestComponent<TValue, THost, TChildren> {
		formControl: FormControl = new FormControl<TValue>(config.defaultValue);

		@ViewChild(control, { static: true })
		control!: InstanceType<THost>;

		@ViewChild(CdrTestComponent, { static: true })
		protected cdrTestComponent?: CdrTestComponent<TValue>;

		@ViewChildren(firstNestedControl)
		children!: QueryList<InstanceType<TChildren>>;

		getTemplateModel(): TValue {
			return this.cdrTestComponent?.model as TValue;
		}

		get nestedControls(): Array<InstanceType<TChildren>> {
			return this.children.toArray();
		}
	}

	await TestBed.configureTestingModule({
		imports: [TestComponent],
	}).compileComponents();

	const fixture = TestBed.createComponent(TestComponent);

	fixture.detectChanges();

	return {
		fixture,
		formControl: fixture.componentInstance.formControl,
		control: fixture.componentInstance.control,
		nestedControls: fixture.componentInstance.nestedControls,
		getTemplateModel: () => fixture.componentInstance.getTemplateModel(),
	};
}
