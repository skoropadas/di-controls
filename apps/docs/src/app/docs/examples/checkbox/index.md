---
keyword: 'CheckboxPage'
---


In this section, we will discuss creating a checkbox and checkbox group using this library. To
start, let's outline the list of requirements and necessary components.

## The checkbox should consist of the following components

- ⚙️ Checkbox group
- ⚙️ Checkbox provided from external sources using `ng-content`

## List of requirements

- 🚩 Checkbox should be provided via `ng-content`.
- 🚩 When an item from the list is selected, its value should be added to the checkbox group's model.
- 🚩 When an item from the list is deselected, its value should be removed from the checkbox group's
  model.
- 🚩 If checkbox group's model is changed, the checkbox should be selected or deselected.
- 🚩 The checkbox should support working with immutable objects.

## Creating a checkbox and checkbox group

### Checkbox

The checkbox is a state control, and the user should have the ability to freely change its state
from checked to unchecked and vice versa. To implement the state control, we need to inherit it
from `DIStateControl`, which will provide us with all the necessary functionality.

Internally, we will also use a native `input type="checkbox"` to maintain the native behavior. For
example, when a checkbox is used inside a `label` tag, it should change its state when the label is
clicked.

We also need to inject `DICompareHost` to access the `compareFn` from the checkbox group in the
future. This function will help us compare immutable objects.

```ts file="./components/checkbox.component.ts" fileName="checkbox.component.ts"
```

### Checkbox Group

The checkbox group should contain a list of all selected values and update the state of child
controls. To implement the group, we need to inherit our component class from
the `DICollectionControl` class. `DICollectionControl` has additional integration
with `DIStateControl` and by default implements the `DICompareHost` interface. Therefore, all we
need to do is provide it as a host control and as a `DICompareHost`.

```ts file="./components/checkbox-group.component.ts" fileName="checkbox-group.component.ts"
```

## Checkbox

{{ NgDocActions.demo("CheckboxDemoComponent", {expanded: true}) }}

## Checkbox with Object

{{ NgDocActions.demo("CheckboxObjectComponent", {expanded: true}) }}

## Checkbox Group

{{ NgDocActions.demo("CheckboxGroupDemoComponent", {expanded: true}) }}

## Checkbox Group with Object

{{ NgDocActions.demo("CheckboxGroupObjectComponent", {expanded: true}) }}
