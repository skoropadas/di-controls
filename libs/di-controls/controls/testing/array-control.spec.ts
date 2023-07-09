import {Directive, inject} from '@angular/core';
import {DI_HOST_CONTROL, provideHostControl} from '../../tokens';
import {DICompareHost, provideCompareHost} from '../../classes';
import {BaseArrayControlDirective, BaseControlDirective, BaseStateControlDirective, createFixture} from './utils';

describe('DIArrayControl', () => {
	describe('DIStateControl', () => {
		@Directive({
			selector: '[diArrayControl]',
			standalone: true,
			providers: [provideHostControl(ArrayControlDirective)],
		})
		class ArrayControlDirective extends BaseArrayControlDirective<number> {
			constructor() {
				super();
			}
		}

		@Directive({
			selector: '[diStateControl]',
			standalone: true,
		})
		class StateControlDirective extends BaseStateControlDirective<number> {
			constructor() {
				super(inject(DI_HOST_CONTROL));
			}
		}

		const hostControlFn = () => ({control: ArrayControlDirective, selector: '[diArrayControl]'});
		const controlFn = (value: unknown) => () => ({
			control: StateControlDirective,
			selector: '[diStateControl]',
			inputs: {value},
		});

		it('should initialize children with host model', async () => {
			const {fixture, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn(1), controlFn(2)],
			});

			// Wait for children initialization
			await fixture.whenStable();

			expect(nestedControls.map((control) => control.getModel())).toEqual([1, false]);
			expect(nestedControls.map((control) => control.checked())).toEqual([true, false]);
		});

		it('should update children model if model was manually updated', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn(1), controlFn(2)],
			});

			control.updateModel([2]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([false, 2]);
			expect(nestedControls.map((control) => control.checked())).toEqual([false, true]);
		});

		it('should update children model if ngControl model was changed', async () => {
			const {formControl, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn(1), controlFn(2)],
			});

			formControl.setValue([2]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([false, 2]);
			expect(nestedControls.map((control) => control.checked())).toEqual([false, true]);
		});

		it('should update host model if children model was changed', async () => {
			const {fixture, control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn(1), controlFn(2)],
			});

			// Wait for children initialization
			await fixture.whenStable();

			nestedControls[0].toggle();
			nestedControls[1].toggle();

			expect(control.getModel()).toEqual([2]);
		});
	});

	describe('DIStateControl with object value', () => {
		interface TestObject {
			id: number;
			name: string;
		}

		@Directive({
			selector: '[diArrayControl]',
			standalone: true,
			providers: [provideHostControl(ArrayControlDirective), provideCompareHost(ArrayControlDirective)],
		})
		class ArrayControlDirective extends BaseArrayControlDirective<TestObject> {
			override compareFn = (a: TestObject | null, b: TestObject | null) => a?.id === b?.id;

			constructor() {
				super(null);
			}
		}

		@Directive({
			selector: '[diStateControl]',
			standalone: true,
		})
		class StateControlDirective extends BaseStateControlDirective<number> {
			constructor() {
				super(inject(DI_HOST_CONTROL), inject(DICompareHost));
			}
		}

		const hostControlFn = () => ({
			control: ArrayControlDirective,
			selector: '[diArrayControl]',
		});
		const controlFn = (value: unknown) => () => ({
			control: StateControlDirective,
			selector: '[diStateControl]',
			inputs: {value},
		});

		it('should initialize children with host model', async () => {
			const {fixture, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [{id: 1, name: 'test1'}],
				nestedControls: [controlFn({id: 1, name: 'test1'}), controlFn({id: 2, name: 'test2'})],
			});

			// Wait for children initialization
			await fixture.whenStable();

			expect(nestedControls.map((control) => control.getModel())).toEqual([{id: 1, name: 'test1'}, false]);
		});

		it('should update children model if model was manually updated', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [{id: 1, name: 'test1'}],
				nestedControls: [controlFn({id: 1, name: 'test1'}), controlFn({id: 2, name: 'test2'})],
			});

			control.updateModel([{id: 2, name: 'test2'}]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([false, {id: 2, name: 'test2'}]);
			expect(nestedControls.map((control) => control.checked())).toEqual([false, true]);
		});

		it('should update children model if ngControl model was changed', async () => {
			const {formControl, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [{id: 1, name: 'test1'}],
				nestedControls: [controlFn({id: 1, name: 'test1'}), controlFn({id: 2, name: 'test2'})],
			});

			formControl.setValue([{id: 2, name: 'test2'}]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([false, {id: 2, name: 'test2'}]);
			expect(nestedControls.map((control) => control.checked())).toEqual([false, true]);
		});

		it('should update host model if children model was changed', async () => {
			const {fixture, control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [{id: 1, name: 'test1'}],
				nestedControls: [controlFn({id: 1, name: 'test1'}), controlFn({id: 2, name: 'test2'})],
			});

			// Wait for children initialization
			await fixture.whenStable();

			nestedControls[0].toggle();
			nestedControls[1].toggle();

			expect(control.getModel()).toEqual([{id: 2, name: 'test2'}]);
			expect(nestedControls.map((control) => control.getModel())).toEqual([false, {id: 2, name: 'test2'}]);
		});
	});

	describe('DIControl', () => {
		@Directive({
			selector: '[diArrayControl]',
			standalone: true,
			providers: [provideHostControl(ArrayControlDirective)],
		})
		class ArrayControlDirective extends BaseArrayControlDirective<number> {
			constructor() {
				super();
			}
		}

		@Directive({
			selector: '[diControl]',
			standalone: true,
		})
		class ControlDirective extends BaseControlDirective<number[]> {
			constructor() {
				super(inject(DI_HOST_CONTROL));
			}
		}

		const hostControlFn = () => ({control: ArrayControlDirective, selector: '[diArrayControl]'});
		const controlFn = () => ({
			control: ControlDirective,
			selector: '[diControl]',
		});

		it('should initialize children with host model', async () => {
			const {fixture, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn, controlFn],
			});

			// Wait for children initialization
			await fixture.whenStable();

			expect(nestedControls.map((control) => control.getModel())).toEqual([[1], [1]]);
		});

		it('should update children model if model was manually updated', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn, controlFn],
			});

			control.updateModel([2]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([[2], [2]]);
		});

		it('should update children model if ngControl model was changed', async () => {
			const {formControl, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn, controlFn],
			});

			formControl.setValue([2]);

			expect(nestedControls.map((control) => control.getModel())).toEqual([[2], [2]]);
		});

		it('should update host model if children model was changed', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn, controlFn],
			});

			nestedControls[0].updateModel([2]);

			expect(control.getModel()).toEqual([2]);
			expect(nestedControls.map((control) => control.getModel())).toEqual([[2], [2]]);
		});

		it('should clear model if child was updated with non-array value', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: [1],
				nestedControls: [controlFn, controlFn],
			});

			nestedControls[0].updateModel(2 as any);

			expect(control.getModel()).toEqual(null);
			expect(nestedControls.map((control) => control.getModel())).toEqual([null, null]);
		});
	});
});
