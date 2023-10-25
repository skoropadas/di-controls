import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from '../components/checkbox.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';

// snippet-from-file="../components/checkbox.component.ts"

@Component({
	selector: 'di-checkbox-demo',
	standalone: true,
	imports: [CommonModule, CheckboxComponent, ReactiveFormsModule, ModelInfoComponent],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-checkbox [formControl]="control">Checkbox</di-checkbox>
			<!-- snippet -->
		</di-model-info>
	`,
})
export class CheckboxDemoComponent {
	control: FormControl<boolean | null> = new FormControl<boolean | null>(null);
}
