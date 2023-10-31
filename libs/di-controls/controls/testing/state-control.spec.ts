import { Directive } from '@angular/core';
import { createFixture } from './utils/create-fixture';
import { BaseStateControlDirective } from './utils';

describe('DIStateControl', () => {
	describe('control with intermediate state', () => {
		@Directive({
			selector: '[diStateControl]',
			standalone: true,
		})
		class StateControlDirective extends BaseStateControlDirective<boolean> {
			constructor() {
				super({hasIntermediate: true});
			}
		}

		const hostControlFn = () => ({ control: StateControlDirective, selector: '[diStateControl]' });

		it('should set default value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: true,
			});

			expect(formControl.value).toBe(true);
			expect(control.getModel()).toBe(true);
			expect(control.checked()).toBe(true);
			expect(control.isIntermediate).toBe(false);
		});

		it('should toggle value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: true,
			});

			control.toggle();

			expect(formControl.value).toBe(false);
			expect(control.getModel()).toBe(false);
			expect(control.checked()).toBe(false);
			expect(control.isIntermediate).toBe(false);
		});

		it('should check value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: false,
			});

			control.check();

			expect(formControl.value).toBe(true);
			expect(control.getModel()).toBe(true);
			expect(control.checked()).toBe(true);
			expect(control.isIntermediate).toBe(false);
		});

		it('should uncheck value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: true,
			});

			control.uncheck();

			expect(formControl.value).toBe(false);
			expect(control.getModel()).toBe(false);
			expect(control.checked()).toBe(false);
			expect(control.isIntermediate).toBe(false);
		});

		it('should set intermediate value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: true,
			});

			control.intermediate();

			expect(formControl.value).toBe(null);
			expect(control.getModel()).toBe(null);
			expect(control.checked()).toBe(null);
			expect(control.isIntermediate).toBe(true);
		});
	});

	describe('control without intermediate state', () => {
		@Directive({
			selector: '[diStateControl]',
			standalone: true,
		})
		class StateControlDirective extends BaseStateControlDirective<boolean> {
			constructor() {
				super();
			}
		}

		const hostControlFn = () => ({ control: StateControlDirective, selector: '[diStateControl]' });

		it('should set intermediate value', async () => {
			const { formControl, control } = await createFixture({
				hostControlFn,
				defaultValue: true,
			});

			control.intermediate();

			expect(formControl.value).toBe(null);
			expect(control.getModel()).toBe(null);
			expect(control.checked()).toBe(false);
			expect(control.isIntermediate).toBe(false);
		});
	});
});
