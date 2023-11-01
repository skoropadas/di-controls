import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxComponent} from '../../checkbox/components/checkbox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ComboboxComponent} from '../components/combobox.component';
import {InputStringDirective} from '../../inputs/components/input-string.directive';
import {FRUIT_NAMES} from '../../../../constants/fruits';
import {OptionComponent} from '../components/option.component';

// snippet-from-file="../components/combobox.component.ts"
// snippet-from-file="../components/combobox-input.directive.ts"
// snippet-from-file="../../inputs/components/input-string.directive.ts"
// snippet-from-file="../components/option.component.ts"

@Component({
	selector: 'di-combobox-demo',
	standalone: true,
	imports: [
		CommonModule,
		ModelInfoComponent,
		ComboboxComponent,
		InputStringDirective,
		OptionComponent,
		ReactiveFormsModule,
	],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-combobox [formControl]="control">
				<di-option *ngFor="let item of items" [value]="item">{{ item }}</di-option>
			</di-combobox>
			<!-- snippet -->
		</di-model-info>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxDemoComponent {
	control: FormControl<string | null> = new FormControl<string | null>(null);
	items: string[] = FRUIT_NAMES;
}
