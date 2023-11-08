# {{ NgDocPage.title }}

In this section, we will discuss creating a date range control using this library. To
start, let's outline the list of requirements and necessary components.

### The date range should consist of the following components

- ⚙️ Input for the start date
- ⚙️ Input for the end date

### List of requirements

- 🚩 Date Range should return an object with the start and end date.
- 🚩 Input for the start date should change the start date in the model.
- 🚩 Input for the end date should change the end date in the model.

## Creating date range

### Inputs

To convert the entered date into a `Date` type, we will use the `diInputDate` directive that we
created in the `*InputsPage` article. Its code looks as follows.

```ts file="../inputs/components/input-date.directive.ts" fileName="input-date.directive.ts"
```

### Range directive

To ensure that the model is updated in a specific object field when the input value changes, we need
to create an additional host directive. This directive should inherit from the `DIProxyControl`
class. `DIProxyControl` allows us to modify the model received by child controls and the parent
control using two functions, `getValue` and `setValue`.

We will also add an input `key` for reusing the directive for both inputs.

```ts file="./components/range.directive.ts" fileName="range.directive.ts"
```

### Date Range

Now, we need to create a Date Range component that will combine our components. Since we can have
only one model value, we need to inherit our component from the `DIControl` class and provide it as
a host.

```ts file="./components/date-range.component.ts" fileName="date-range.component.ts"
```

## Date range

{{ NgDocActions.demo("DateRangeDemoComponent", {expanded: true}) }}
