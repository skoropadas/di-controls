# {{ NgDocPage.title }}

In this section, we will discuss creating a combobox using this library. To start, let's outline the
list of requirements and necessary components.

### The combobox should consist of the following components

- ⚙️ Input field
- ⚙️ Dropdown
- ⚙️ List of items provided from external sources using `ng-content` that will be displayed in the
  dropdown

### List of requirements

- 🚩 List items should be provided via `ng-content`.
- 🚩 When an item from the list is selected, its value should be set in the input field.
- 🚩 When the input field gains focus, the dropdown should automatically open.
- 🚩 When an item from the list is selected, the dropdown should close.
- 🚩 If the user changes the text in the input field while an item is selected, the model's value
  should be reset.
- 🚩 The combobox should support working with immutable objects.

## Creating a combobox

### Option

Let's start by creating a component that will represent the list item. We will call it `Option`.
Option should be a state control, which mean that it can be selected and deselected. To do this,
we will inherit from the `DIStateControl` class. `DIStateControl` is a base class for all state
controls, it provides all the necessary methods for working with the state of the control.

We will highlight the item upon clicking on it, so we need to subscribe to click events and call
the `check` method provided by `DIStateControl`.

We will also use `aria-checked='true'` property in our styles to highlight the selected item.

```ts file="./components/option.component.ts" fileName="option.component.ts"
```

### Input field

For the input field, we will reuse the `diInputString` that we created in the `*InputsPage`
page. We will also create a directive that will be responsible for resetting the value of the
combobox if the user changes the input value. We will call it `ComboboxInputDirective`.

This directive will inherit from the `DIProxyControl` class, because it allows you to
modify the behavior of the child control, we also need to implement this directive as a host to turn
it into a kind of middleware between the `diInputString` directive and our future combobox.

Since our combobox needs to support working with objects, we will need an additional `stringifyFn`
function that we will be used to convert an object to a string.

```ts file="./components/combobox-input.directive.ts" fileName="combobox-input.directive.ts"
```

### Combobox component

Now let's create the main component, which will be responsible for the combobox. We will call it
`ComboboxComponent`. To keep it simple for creating the dropdown we use `position: absolute`.

This component will consolidate all child components found in the template or passed
through `ng-content`, meaning they will share one model.

The first thing to do is to provide the component as a host so that all child components can
register within it. Additionally, we need to implement the `DICompareHost` interface and provide the
component as a compare host. This is necessary for our option component to access the `compareFn` of
our combobox and use it to determine its state (checked or not). Without this function, you may
encounter issues with determining the state for immutable objects.

To close the dropdown when an item in the list is selected, we can utilize
the `onChildControlChange` hook. It is called every time the model of the current control is changed
by a child control.

```ts file="./components/combobox.component.ts" fileName="combobox.component.ts"
```

## Combobox

{{ NgDocActions.demo("ComboboxDemoComponent",{expanded: true}) }}

## Combobox with objects

{{ NgDocActions.demo("ComboboxObjectDemoComponent",{expanded: true}) }}

## Combobox with radio buttons

Since the list items are provided externally, you can replace them with any other state controls.
For example, instead of using `di-option`, you can pass `di-radio`, and the combobox will continue
to work correctly.

{{ NgDocActions.demo("ComboboxRadioDemoComponent",{expanded: true}) }}
