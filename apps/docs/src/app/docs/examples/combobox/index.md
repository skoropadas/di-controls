# {{ NgDocPage.title }}

In this section, we will discuss creating a combobox using this library. To start, let's outline the
list of requirements and necessary components.

**The combobox should consist of the following components:**

- Input field
- Dropdown
- List of items provided from external sources using `ng-content`

**List of requirements:**

- List items should be provided via `ng-content`.
- When an item from the list is selected, its value should be set in the input field.
- When the input field gains focus, the dropdown should automatically open.
- When an item from the list is selected, the dropdown should close.
- If the user changes the text in the input field while an item is selected, the model's value
  should be reset.
- The combobox should support working with immutable objects.

## Creating a combobox

### Option

Let's start by creating a component that will represent the list item. We will call it `Option`.
Option should be a state control, so it should inherit from the `DIStateControl` class.
`DIStateControl` is a base class for all state controls, which implements the `ControlValueAccessor`
interface and provides the `value` input.

We only need to call `check()` when the user clicks
on the item to select it and inject host control into the constructor to connect it to the combobox.

```ts file="./components/option.component.ts" fileName="option.component.ts"
```

## Input field

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



### Input field

We already have a component that implements the input field, so we can reuse it for combobox

## Combobox

## Combobox with radio buttons

Since the list items are provided externally, you can replace them with any other state controls.
For example, instead of using `di-option`, you can pass `di-radio`, and the combobox will continue
to work correctly.


## Combobox with objects

{{ NgDocActions.demo("ComboboxObjectDemoComponent",{expanded: true}) }}
