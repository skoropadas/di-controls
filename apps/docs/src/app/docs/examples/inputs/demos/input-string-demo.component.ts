import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputStringDirective} from '../components/input-string.directive';
import {ModelInfoComponent} from '../../../../components/model-info.component';

// snippet-from-file="../components/input-string.directive.ts"

@Component({
	selector: 'di-input-string-demo',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		InputStringDirective,
		ModelInfoComponent,
		ReactiveFormsModule,
	],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<input diInputString [formControl]="control" />
			<!-- snippet -->
		</di-model-info>
	`,
})
export class InputStringDemoComponent {
	control: FormControl<string | null> = new FormControl<string | null>('');
}
