import { Directive, inject } from '@angular/core';
import {injectHostControl, provideHostControl} from '../../tokens';
import { BaseControlDirective, BaseObjectControlDirective, createFixture } from './utils';

describe('DIObjectControl', () => {
	interface TestObject {
		start: number | null;
		end: number | null;
	}

	@Directive({
		selector: '[diObjectControl]',
		standalone: true,
		providers: [provideHostControl(ObjectControlDirective)],
	})
	class ObjectControlDirective extends BaseObjectControlDirective<TestObject, number> {
		constructor() {
			super({
				getValue: (obj: TestObject | null) => obj?.start ?? null,
				setValue: (obj: TestObject | null, value: number | null) => ({ start: value, end: obj?.end ?? null }),
			});
		}
	}

	@Directive({
		selector: '[diControl]',
		standalone: true,
	})
	class ControlDirective extends BaseControlDirective<number> {
		constructor() {
			super({ host: injectHostControl() });
		}
	}

	const hostControlFn = () => ({
		control: ObjectControlDirective,
		selector: '[diObjectControl]',
	});

	const controlFn = () => ({
		control: ControlDirective,
		selector: '[diControl]',
	});

	it('should extract child model from the host model', async () => {
		const { fixture, control, nestedControls } = await createFixture({
			hostControlFn,
			defaultValue: { start: 1, end: 2 },
			nestedControls: [controlFn],
		});

		// Wait for children initialization
		await fixture.whenStable();

		expect(control.getModel()).toEqual({ start: 1, end: 2 });
		expect(nestedControls.map((control) => control.getModel())).toEqual([1]);
	});

	it('should update children model if model was manually updated', async () => {
		const { control, nestedControls } = await createFixture({
			hostControlFn,
			defaultValue: { start: 1, end: 2 },
			nestedControls: [controlFn],
		});

		control.updateModel({ start: 2, end: 3 });

		expect(control.getModel()).toEqual({ start: 2, end: 3 });
		expect(nestedControls.map((control) => control.getModel())).toEqual([2]);
	});

	it('should update children model if ngControl model was changed', async () => {
		const { control, formControl, nestedControls } = await createFixture({
			hostControlFn,
			defaultValue: { start: 1, end: 2 },
			nestedControls: [controlFn],
		});

		formControl.setValue({ start: 2, end: 3 });

		expect(control.getModel()).toEqual({ start: 2, end: 3 });
		expect(nestedControls.map((control) => control.getModel())).toEqual([2]);
	});

	it('should update host object correctly', async () => {
		const { control, nestedControls } = await createFixture({
			hostControlFn,
			defaultValue: { start: 1, end: 2 },
			nestedControls: [controlFn],
		});

		nestedControls[0].updateModel(3);

		expect(control.getModel()).toEqual({ start: 3, end: 2 });
	});
});
