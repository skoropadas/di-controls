# {{ NgDocPage.title }}

In this section, we will discuss creating a radio and radio group using this library. To
start, let's outline the list of requirements and necessary components.

**The radio should consist of the following components:**

- Radio group
- Radio provided from external sources using `ng-content`

**List of requirements:**

- Radio should be provided via `ng-content`.
- Only one radio can be selected at a time.
- If radio group's model is changed, the radio should be selected or deselected.
- The radio should support working with immutable objects.

## Creating a radio and radio group

### Radio

The radio is a state control, and the user should have the ability to check only one radio at a
time. To implement the state control, we need to inherit it
from `DIStateControl`, which will provide us with all the necessary functionality.

Internally, we will also use a native `input type="radio"` to maintain the native behavior. For
example, when a radio is used inside a `label` tag, it should change its state when the label is
clicked.

We also need to inject `DICompareHost` to access the `compareFn` from the radio group in the
future. This function will help us compare immutable objects.

```ts file="./components/radio.component.ts" fileName="radio.component.ts"
```

### Radio Group

The radio group should contain only one value and update the state of child
controls. To implement the group, we need to inherit our component class from
the `DIControl` class. `DIControl` takes the model as is, which means that the new model value will
replace the previous one. This way, only one radio button will always be selected.

We also need to implement the `DICompareHost` interface and provide the group as a compare host so
that child radio buttons have access to the `compareFn` and can correctly determine their state when
working with immutable objects.

```ts file="./components/radio-group.component.ts" fileName="radio-group.component.ts"
```

## Radio

{{ NgDocActions.demo("RadioDemoComponent", {expanded: true}) }}

## Radio with Object

{{ NgDocActions.demo("RadioObjectDemoComponent", {expanded: true}) }}
