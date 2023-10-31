import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent} from '../components/checkbox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CheckboxGroupComponent} from '../components/checkbox-group.component';
import {FRUIT_NAMES} from '../../../../constants/fruits';

// snippet-from-file="../components/checkbox-group.component.ts"
// snippet-from-file="../components/checkbox.component.ts"

@Component({
	selector: 'di-checkbox-group-demo',
	standalone: true,
	imports: [
		CommonModule,
		CheckboxComponent,
		ModelInfoComponent,
		ReactiveFormsModule,
		CheckboxGroupComponent,
	],
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-checkbox-group [formControl]="control">
				<di-checkbox *ngFor="let item of items" [value]="item">{{ item }}</di-checkbox>
			</di-checkbox-group>
			<!-- snippet -->
		</di-model-info>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupDemoComponent {
	control: FormControl<string[] | null> = new FormControl<string[]>([FRUIT_NAMES[2]]);
	items: string[] = FRUIT_NAMES;
}
