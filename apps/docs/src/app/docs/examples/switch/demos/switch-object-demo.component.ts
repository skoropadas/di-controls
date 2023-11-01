import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModelInfoComponent} from '../../../../components/model-info.component';
import {SwitchComponent} from '../components/switch.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Fruit} from '../../../../constants/fruits';

// snippet-from-file="../components/switch.component.ts"

@Component({
	standalone: true,
	selector: 'di-switch-object-demo',
	template: `
		<di-model-info [control]="control">
			<!-- snippet "Usage" opened -->
			<di-switch [formControl]="control" [value]="{ id: 1, name: 'Apple' }">Apple</di-switch>
			<!-- snippet -->
		</di-model-info>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, ModelInfoComponent, ReactiveFormsModule, SwitchComponent],
})
export class SwitchObjectDemoComponent {
	control: FormControl<Fruit | false | null> = new FormControl<Fruit | false | null>(null);
}
