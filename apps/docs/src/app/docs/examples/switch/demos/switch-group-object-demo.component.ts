import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {SwitchGroupComponent} from '../components/switch-group.component';
import {SwitchComponent} from '../components/switch.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Fruit, FRUITS} from '../../../../constants/fruits';

// snippet-from-file="../components/switch.component.ts"
// snippet-from-file="../components/switch-group.component.ts"

@Component({
	standalone: true,
	selector: 'di-switch-group-object-demo',
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-switch-group [formControl]="control" [compareFn]="compareFruits">
				<di-switch *ngFor="let item of items" [value]="item">{{ item.name }}</di-switch>
			</di-switch-group>
			<!-- snippet -->
		</di-model-info>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		ModelInfoComponent,
		SwitchGroupComponent,
		SwitchComponent,
		ReactiveFormsModule,
	],
})
export class SwitchGroupObjectDemoComponent {
	control: FormControl<Fruit[] | null> = new FormControl<Fruit[]>([{ id: 1, name: 'Apple' }]);
	items: Fruit[] = FRUITS;

	compareFruits(a: Fruit | null, b: Fruit | null): boolean {
		return a?.id === b?.id;
	}
}
