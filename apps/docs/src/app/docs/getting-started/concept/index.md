# {{ NgDocPage.title }}

To better understand the concept of how this library works, let's first grasp the problems that
standard ways of
creating controls have and how we could solve them without using this library.

## Standard way of creating controls

Let's imagine that you have a component library that contains various controls such as comboboxs,
checkboxes, radio
buttons, and so on. The majority of their code would include the implementation of
the `ControlValueAccessor` interface
and various methods for updating the displayed state.

## The Problem

For example, let's say you have a combobox. What should it do when the model changes from different
sources
(`NgModel`, Click on option, etc.)?
The standard implementation will likely be tied to the list of items and the input field because
when the model changes,
you need to know which component`s states should be updated. This hampers reusability, as, for
example, a list item
cannot be an independent component, its state is always determined by the parent component (
combobox) whether it is
selected or not.

## DIControls way

DIControls allows you to create independent components, which means that each component can operate
on its own, whether
it's a complete combobox or an individual list item.

Each of these components has a model and can work with `NgModel` or `FormControl`, based on which it
can update and display
its state.

Components created using the DIControls library can communicate with each other using Dependency
Injection, thus
notifying parent components of model changes or accepting a new model value from a parent component.

This working scheme enables the implementation of component interactions by simply nesting one tag
within another,
without the need for additional binding.

On the example below, all components will be connected to the same model, and when the model
changes, all components
will be updated which gives them the ability to work independently.

```html
<combobox>
	<input inputString>

	<option *ngFor="let user of users" [value]="user">
		{{ '{{ user.name }}' | safe }}
	</option>
</combobox>
```

Users of such a control would have the ability to customize it by adding or removing components they
want, reusing them
by simply nesting them inside the necessary tag.

By using this approach, you will eliminate the need for constantly updating the state in your
controls, and their code
will only contain the necessary business logic for their functionality. For example, opening the
dropdown when text is
entered in the input or closing it when an item is selected from the list. As a result, your code
will be reduced to
just a few lines. Please check examples to see how it works in practice.
