import { Directive, ElementRef, inject } from '@angular/core';
import { DICollectionControl, DIControl, DIProxyControl, DIStateControl } from 'di-controls';

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
export abstract class BaseArrayControlDirective<T> extends DICollectionControl<T> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DICollectionControl<T>['model']> {
		return this.model();
	}
}

@Directive()
export abstract class BaseObjectControlDirective<T, C> extends DIProxyControl<T, C> {
	element: HTMLElement = inject(ElementRef).nativeElement;

	getModel(): ReturnType<DIProxyControl<T, C>['model']> {
		return this.model();
	}
}
