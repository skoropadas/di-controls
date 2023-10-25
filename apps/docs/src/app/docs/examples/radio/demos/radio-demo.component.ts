import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from '../components/radio.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FRUIT_NAMES} from '../../../../constants/fruits';
import {RadioGroupComponent} from '../components/radio-group.component';

// snippet-from-file="../components/radio.component.ts"
// snippet-from-file="../components/radio-group.component.ts"

@Component({
	selector: 'di-radio-demo',
	standalone: true,
	imports: [
		CommonModule,
		RadioComponent,
		ModelInfoComponent,
		ReactiveFormsModule,
		RadioGroupComponent,
	],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-radio-group [formControl]="control">
				<di-radio *ngFor="let item of items" [value]="item">{{item}}</di-radio>
			</di-radio-group>
			<!-- snippet -->
		</di-model-info>
	`,
})
export class RadioDemoComponent {
	control: FormControl<string | null> = new FormControl<string | null>(FRUIT_NAMES[2]);
	items: string[] = FRUIT_NAMES;
}
