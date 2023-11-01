# {{ NgDocPage.title }}

## Combobox

{{ NgDocActions.demo("ComboboxDemoComponent",{expanded: true}) }}

In the demo above, we created the main class, `ComboboxComponent`, which connects all
your internal controls. It is inherited from the `DIControl` class (for a multi-select combobox, it
should be a `DICollectionControl`).

In its template, we placed an input that was created in advance, which you can reference on the
`*InputsPage` page. We also added a simplified dropdown to display the list of selectable
items.

We created a separate selection element for the combobox, which inherits from
the `DIStateControl` class, as it should be a state control that displays whether it's selected or
not.

Additionally, we created the `ComboboxInputDirective`, which inherits from the `DIProxyControl`
class. This directive is used on our input to reset the selected value if the user changes the
input value.

## Combobox with radio buttons

Since the list items are provided externally, you can replace them with any other state controls.
For example, instead of using `di-option`, you can pass `di-radio`, and the combobox will continue
to work correctly.

{{ NgDocActions.demo("ComboboxRadioDemoComponent",{expanded: true}) }}
