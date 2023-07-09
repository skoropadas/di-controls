import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CheckboxComponent} from '../components/checkbox.component';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {CheckboxGroupComponent} from '../components/checkbox-group.component';
import {Fruit, FRUITS} from '../../../../constants/fruits';

@Component({
	selector: 'di-checkbox-group-object',
	standalone: true,
	imports: [CommonModule, CheckboxComponent, ModelInfoComponent, ReactiveFormsModule, CheckboxGroupComponent],
	template: `
		<di-model-info [control]="control">
			<di-checkbox-group [formControl]="control" [compareFn]="compareFruits">
				<di-checkbox *ngFor="let item of items" [value]="item">{{ item.name }}</di-checkbox>
			</di-checkbox-group>
		</di-model-info>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGroupObjectComponent {
	control: FormControl<Fruit[] | null> = new FormControl<Fruit[]>([{id: 1, name: 'Apple'}]);
	items: Fruit[] = FRUITS;

	compareFruits(a: Fruit | null, b: Fruit | null): boolean {
		return a?.id === b?.id;
	}
}
