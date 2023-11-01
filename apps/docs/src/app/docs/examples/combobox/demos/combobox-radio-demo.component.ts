import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckboxComponent} from '../../checkbox/components/checkbox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ComboboxComponent} from '../components/combobox.component';
import {InputStringDirective} from '../../inputs/components/input-string.directive';
import {FRUIT_NAMES} from '../../../../constants/fruits';
import {OptionComponent} from '../components/option.component';
import {RadioComponent} from '../../radio/components/radio.component';

// snippet-from-file="../components/combobox.component.ts"
// snippet-from-file="../components/combobox-input.directive.ts"
// snippet-from-file="../../inputs/components/input-string.directive.ts"
// snippet-from-file="../../radio/components/radio.component.ts"

@Component({
	selector: 'di-combobox-radio-demo',
	standalone: true,
	imports: [
		CommonModule,
		ModelInfoComponent,
		ComboboxComponent,
		InputStringDirective,
		ReactiveFormsModule,
		RadioComponent,
	],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-combobox [formControl]="control">
				<di-radio *ngFor="let item of items" [value]="item">{{ item }}</di-radio>
			</di-combobox>
			<!-- snippet -->
		</di-model-info>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxRadioDemoComponent {
	control: FormControl<string | null> = new FormControl<string | null>(null);
	items: string[] = FRUIT_NAMES;
}
