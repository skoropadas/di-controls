# {{ NgDocPage.title }}

DIControls includes several classes that can be used to create controls.

## Controls connection

Each control can be connected to its child or parent through Dependency Injection. When controls are
connected, they exchange model updates to "synchronize" it. In other words, when one control updates
its model independently or through the `NgControl` API, all other linked controls will also update
their models based on this update.

To connect controls, your parent component should be provided using `provideHostControl` function.

```ts {2} fileName="parent-control.component.ts"
@Component({
  providers: [provideHostControl(ParentControlComponent)],
})
export class ParentControlComponent extends DIControl<string> {
  constructor() {
    super();
  }
}
```

To connect a child control, you need to inject parent control using `injectHostControl` function.

> **Note**
> You can also pass additional properties that are available to the `inject()` function.

```ts {6} fileName="child-control.component.ts"
@Component({
  // ...
})
export class ChildControlComponent extends DIControl<string> {
  constructor() {
    super({host: injectHostControl({optional: true})});
  }
}
````

Now if you put `ChildControlComponent` inside `ParentControlComponent` tag, they will be connected.

```html

<parent-control>
  <child-control />
</parent-control>
```

## Classes overview

Below, we will examine these classes and their usage options.

### DIControl

`DIControl` is the base class that takes the model "as is" and updates it without additional
modifications. This class is suitable for implementing **most** UI controls. By using it, you can
implement both parent components that accumulate and facilitate communication between child
controls and simple standalone controls.

```ts fileName="my-control.component.ts"
@Component({
  // ...
})
export class MyControlComponent extends DIControl<string> {
  constructor() {
    super();
  }

  @HostListener('click')
  onClick() {
    this.updateModel('new value');
  }
}
```

- API: `DIControl`
- Examples: `*InputsPage`

### DIStateControl

`DIStateControl` inherits all the functionality from `DIControl`, adding additional methods for
creating
a state control such as `checkbox`, `radio`, `ship` etc.

```ts fileName="my-control.component.ts"
@Component({
  // ...
})
export class MyControlComponent extends DIStateControl<string> {
  constructor() {
    super();
  }

  @HostListener('click')
  onClick() {
    this.toggle();
  }
}
```

- API: `DIStateControl`
- Examples: `*CheckboxPage`, `*RadioPage`, `*SwitchPage`, `*ComboboxPage`

### DICollectionControl

`DICollectionControl` stores its model as an array and has additional integration
with `DIStateControl`.
If
the child `DIStateControl` has a state of `checked = true`, its value will be added to the
`DICollectionControl`'s model as an array element. Otherwise, it will be removed. This control can
assist
you in creating components like CheckboxGroup or a multi-select ComboBox.

```ts fileName="my-control.component.ts"
@Component({
  // ...
})
export class MyControlComponent extends DICollectionControl<string> {
  constructor() {
    super();
  }
}
```

- API: `DICollectionControl`
- Examples: `*CheckboxPage`

### DIProxyControl

`DIProxyControl` is very situational, it can be used to bind the model of a child control to a
specific field of its parent's object or to modify the model before providing it to the child
control
and vice versa.

```ts fileName="my-control.component.ts"
@Component({
  // ...
})
export class MyControlComponent extends DIProxyControl<string> {
  constructor() {
    super({
      getValue: (obj) => obj?.date,
      setValue: (obj, date) => ({...obj, date})
    });
  }
}
```

- API: `DIProxyControl`
- Examples: `*DateRangePage`, `*ComboboxPage`
