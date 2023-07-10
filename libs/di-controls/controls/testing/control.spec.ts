import {Directive, inject} from '@angular/core';
import {createFixture} from './utils/create-fixture';
import {BaseControlDirective} from './utils';
import {DI_HOST_CONTROL, provideHostControl} from '../../tokens';

describe('DIControl', () => {
	describe('standalone', () => {
		@Directive({
			selector: '[diControl]',
			standalone: true,
		})
		class ControlDirective extends BaseControlDirective<string> {
			constructor() {
				super();
			}
		}

		const hostControlFn = () => ({control: ControlDirective, selector: '[diControl]'});

		it('should set default value', async () => {
			const {formControl, control} = await createFixture({
				hostControlFn,
				defaultValue: '1',
			});

			expect(formControl.value).toBe('1');
			expect(control.getModel()).toBe('1');
		});

		it('should update value', async () => {
			const {formControl, control} = await createFixture({
				hostControlFn,
				defaultValue: '1',
			});

			formControl.setValue('2');

			expect(formControl.value).toBe('2');
			expect(control.getModel()).toBe('2');
		});

		it('should update ngControl value', async () => {
			const {fixture, formControl, control, getTemplateModel} = await createFixture({
				hostControlFn,
				defaultValue: '1',
			});

			control.updateModel('2');

			fixture.detectChanges();

			expect(formControl.value).toBe('2');
			expect(control.getModel()).toBe('2');
			expect(getTemplateModel()).toBe('2');
		});

		it('should make formControl touched', async () => {
			const {formControl, control} = await createFixture({
				hostControlFn,
				defaultValue: '1',
			});

			control.touchControl();

			expect(formControl.touched).toBe(true);
		});

		it('should disabled control', async () => {
			const {formControl, control} = await createFixture({
				hostControlFn,
				defaultValue: '1',
			});

			formControl.disable();

			expect(control.disabled).toBe(true);
			expect(control.element.getAttribute('disabled')).toBe('true');
			expect(control.element.getAttribute('aria-disabled')).toBe('true');
		});

		it('should remove disabled attribute if control was enabled', async () => {
			const {formControl, control} = await createFixture({
				hostControlFn,
				defaultValue: ''
			});

			formControl.disable();
			formControl.enable();

			expect(control.disabled).toBe(false);
			expect(control.element.getAttribute('disabled')).toBe(null);
			expect(control.element.getAttribute('aria-disabled')).toBe('false');
		});
	});

	describe('host', () => {
		@Directive({
			selector: '[diHostControl]',
			standalone: true,
			providers: [provideHostControl(HostControlDirective)],
		})
		class HostControlDirective extends BaseControlDirective<string> {
			constructor() {
				super();
			}
		}

		@Directive({
			selector: '[diControl]',
			standalone: true,
		})
		class ControlDirective extends BaseControlDirective<string> {
			constructor() {
				super(inject(DI_HOST_CONTROL));
			}
		}

		const hostControlFn = () => ({control: HostControlDirective, selector: '[diHostControl]'});
		const controlFn = () => ({control: ControlDirective, selector: '[diControl]'});

		it('should initialize children with host model', async () => {
			const {fixture, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [controlFn, controlFn],
			});

			// Wait for children initialization
			await fixture.whenStable();

			expect(nestedControls.map((control) => control.getModel())).toEqual(['1', '1']);
		});

		it('should update children model if model was manually updated', async () => {
			const {control, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [controlFn, controlFn],
			});

			control.updateModel('2');

			expect(nestedControls.map((control) => control.getModel())).toEqual(['2', '2']);
		});

		it('should update children model if ngControl model was changed', async () => {
			const {formControl, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [controlFn, controlFn],
			});

			formControl.setValue('2');

			expect(nestedControls.map((control) => control.getModel())).toEqual(['2', '2']);
		});

		it('children should touch host', async () => {
			const {formControl, nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [() => ({control: ControlDirective, selector: '[diControl]'})],
			});

			nestedControls[0].touchControl();

			expect(formControl.touched).toBe(true);
		});

		it('children should update host model', async () => {
			const {formControl, nestedControls, control} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [() => ({control: ControlDirective, selector: '[diControl]'})],
			});

			nestedControls[0].updateModel('2');

			expect(formControl.value).toBe('2');
			expect(control.getModel()).toBe('2');
		});

		it('children update should update other children model', async () => {
			const {nestedControls} = await createFixture({
				hostControlFn,
				defaultValue: '1',
				nestedControls: [controlFn, controlFn]
			});

			nestedControls[0].updateModel('2');

			expect(nestedControls.map((control) => control.getModel())).toEqual(['2', '2']);
		});
	});
});
