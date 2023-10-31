import { Directive, ElementRef, inject } from '@angular/core';
import { DIControl } from '../../control';
import { DIStateControl } from '../../state-control';
import { DIArrayControl } from '../../array-control';
import { DIObjectControl } from '../../object-control';

@Directive()
export abstract class BaseControlDirective<T> extends DIControl<T> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DIControl<T>['model']> {
		return this.model();
	}

	touchControl(): void {
		this.touch();
	}
}

@Directive()
export abstract class BaseStateControlDirective<T> extends DIStateControl<T> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DIStateControl<T>['model']> {
		return this.model();
	}

	touchControl(): void {
		this.touch();
	}
}

@Directive()
export abstract class BaseArrayControlDirective<T> extends DIArrayControl<T> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DIArrayControl<T>['model']> {
		return this.model();
	}
}

@Directive()
export abstract class BaseObjectControlDirective<T, C> extends DIObjectControl<T, C> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DIObjectControl<T, C>['model']> {
		return this.model();
	}
}
