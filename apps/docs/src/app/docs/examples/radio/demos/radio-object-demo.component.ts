import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from '../components/radio.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {Fruit, FRUITS} from '../../../../constants/fruits';
import {RadioGroupComponent} from '../components/radio-group.component';

// snippet-from-file="../components/radio-group.component.ts"
// snippet-from-file="../components/radio.component.ts"

@Component({
	selector: 'di-radio-object-demo',
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
				<di-radio *ngFor="let item of items" [value]="item">{{ item.name }}</di-radio>
			</di-radio-group>
			<!-- snippet -->
		</di-model-info>
	`,
})
export class RadioObjectDemoComponent {
	control: FormControl<Fruit | null> = new FormControl<Fruit | null>(FRUITS[2]);
	items: Fruit[] = FRUITS;
}
