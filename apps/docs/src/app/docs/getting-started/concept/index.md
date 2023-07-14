# {{ NgDocPage.title }}

To better understand the concept of how this library works, let's first grasp the problems that standard ways of
creating controls have and how we could solve them without using this library.

## Standard way of creating controls

Let's imagine that you have a component library that contains various controls such as comboboxs, checkboxes, radio
buttons, and so on. The majority of their code would include the implementation of the `ControlValueAccessor` interface
and various methods for updating the displayed state. For example, let's say you have a combobox. What should it do when
the model changes from different sources?

<iframe frameborder="0" style="width:100%;height:363px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R5VjZdpswEP0aP7pHAhvbj17TJU3TptkeFZANjUBEiNjk6yuBZLYskGPHPq1fzFyNJDT3akaiY079zQlDofudOph0DOBsOuasYxjQ6BniTyJJhgz6gwxYMc9RTjlw4T1hBQKFxp6Do5Ijp5RwLyyDNg0CbPMShhij67LbkpLyrCFa4RpwYSNSR689h7sZOjQGOf4ZeytXzwytUdbiI%2B2sVhK5yKHrAmTOO%2BaUUcqzJ38zxUQGT8fl%2BktyTU7vrZOvP6MHdDn59vvsqpsNtmjTZbsEhgP%2B7qHhk4meFpe%2FHq6S0XnsXsU2i7tDtTSe6HhhR4RPmZRxl65ogMg8RyeMxoGD5ahAWLnPKaWhAKEA%2F2DOE6UFFHMqIJf7RLU6KHLT%2FtJYeoRMKaEsnd50hgAMTIFHnNF7XGgZ9wHoyRkbRkOLDbEV5q%2BEQOlbrrugGBXDE0x9zFkiHBgmiHuPZVkhpc7V1m%2Fb9Zx64v0MoHaSaSkZqX1k9EB5iIjGzMaqV86jeCi8Rg6l7LZgenQIpgVDLLmR%2FT%2F1tXmrhkuN2aZkJco6LoWY%2F4dC1GyPiMRqCVPq39E7uqlJpyyMtetxfBEiW7auRRkpi6DCH7xDEBsSpwEv4Mv09xyvAFjz8aI1r4%2BYcbx5lTHVagzLkYc65a%2FzigE1O26hWlQZKpJcoqctF7DGRcewkC8jS8TcEy8IY76FVnwbnB2RBEAf4GU7kuBsMv1AksyDk2TUSPoRco8GcKdUWACN4KANFcZsYIH2ebA5Fb2jowKaNS4iTOR5Ur6a9RDLQ9oko8fIgYPUxI3HbwrPt3l5FFZeEKWh6%2BFLKXRXqTKrLMdXAocVvWSlulYBx4yhpOAWSofo5WmGlWnMXuXo%2FIb%2FEFQEm73ATqtxXdBb9f7bycU6uuRi1aiIQwdxLC%2BJ2X25mkUCZyyvrsKyCYoizy6TUGbsvYfk9klBp5483dwWEtHzqScSe47XV5PCC4%2FoJe0438B%2Bp9nZHDRMTAXx9J%2FRjsZ2nL8anuBr4%2FRgeZwubJYId5V8BvVqmgR2KvJU9wfR%2B3vU%2B6EXyTdVDRqKGjYUtVJLV0akmiL3qfL%2BSE%2BoL0zVQt1U6PWhDKuZ1POhtCNdLiO8l%2B2gs1FhP5yt1KfSxYIyfyqqJ6P1QpALH75dmvdVULenqD0UUGHmH0CzcOefkc35Xw%3D%3D"></iframe>

### Problems

The standard implementation will likely be tied to the list items and the input field because when the model changes,
you need to know which components' states should be updated. This hampers reusability, as, for example, a list item
cannot be an independent component, its state is always determined by the parent component (combobox) whether it is
selected or not.

But how could we make each component independent and reusable using standard means? For instance, we could implement
the `ControlValueAccessor` interface for each component that depends on the current model of the control.

For example, let's consider a similar implementation of a combobox:

```html

<combobox>
	<input [(ngModel)]="model">
	<option [(ngModel)]="model" [value]="1">1</option>
	<option [(ngModel)]="model" [value]="2">2</option>
	<option [(ngModel)]="model" [value]="3">3</option>
</combobox>
```

If each list item had access to the current model of the control, it could display its own state, and you wouldn't have
to iterate every time you want to highlight a new item in the list. At the same time, the controls wouldn't be dependent
on the combobox and could be used elsewhere without additional code.

The problem with the above example is that it requires passing the model through `NgModel` or `FormControl` and
it could be not flexible enough for some cases. Also, such an API would be unacceptable for users of this control and
could cause issues with template updates.

## DIControls way

Essentially, the `di-controls` library does something similar, but it implements model passing using Dependency
Injection, which allows you to integrate any control with any other control by simply placing it inside the parent component's tag.
So, if all controls know about the current model of the parent component, they can display their own state without
additional code, so for the DIControls the diagram looks like this:

<iframe frameborder="0" style="width:100%;height:363px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R5Vhde5owFP41XronCYp6Wb%2B6j67r1rVdL1OIkDUQGkIVf%2F2CJALSduDq7LN5I%2BclOcec9z2cIx1rEqxOBY78z9wlrIOAu%2BpY0w5CEKKR%2BsqQNEfs4TAHPEFdvagALumaaBBoNKEuiSsLJedM0qgKOjwMiSMrGBaCL6vLFpxVo0bYIzXg0sGsjt5QV%2Fo5OkSDAn9PqOebyNDWBw6wWaxPEvvY5csSZM061kRwLvOrYDUhLEueycvNh%2FSGnd3bpx%2B%2Fxg%2F4avzp%2B%2Fl1N3c2b7NlewRBQrm3a7i28Hp%2B9e3hOh1dJP514oikq7mMZWryRVyVPm1yIX3u8RCzWYGOBU9Cl2RegbKKNWecRwqECvxJpEy1FnAiuYJ8GTB918Wxv9mfGQvK2IQzLjbhLXcIwMBSeCwFvyelOyd9AHpZxIbZMGLDwiPyhRSgfF127pJidA5PCQ%2BIFKlaIAjDkj5WZYW1Or3tuu3WC07V70NAV5JlaxnpOkI9UHUR80Q4RO8qeFQXpZ9RQBt2WzA9OgbTiiGR%2Fsj2v%2Bsb81a72xjTVcVKtfW2FGL9HwrR0R4xS%2FQRJjy443d8VZNOVRhLn0pyGWEnu7tUbaQqgh3%2B4B2GBGU4D2UJX2w%2BT%2FEKgD07mbfm9ZEISVYvMqbvomE189A88pdFx4CGHb%2FULXYZKpNcoactF7DGRQfZOMgyy1TsMQ2jRG4hT26T80okAdAHZNGOJDgdT%2F4iSdbRSUI1kr5EkvIQvioVNsAjOGhDBZoObND%2BOdicit6bo8J6hgr0r1Nhvzkq7BoVSeRiSbKROv93sTuHhO5JNugry2E4jqlTJaHK2L4jxXNd6PluQ1ZUlgIp69aMNeq6CJMZJkqshglZP80GnlNmjtRODXnff6lb9BtOMqDhJFMST%2F8J7RjslQeehvNOzU8PVv104Y6jPC8HG5wGNcWHZHlkue8j3j%2Bcuo%2BjfdBQ%2BrCh9LWmulnidh%2Bkh6yF%2FsgENEPocM9yqLtCdrOCKFyZhXyxiMlBisY8s0pVc%2B7p10%2FzORfBRPVYwev1U9QH%2FH0DP1Tb3Q6jB2izyixeKuXpLl7NWbNf"></iframe>

So, as you can see, each control has access to the current model of the parent component, and it also can update it.
And the code of you combobox may look like this:

```html

<combobox>
	<input inputString>
	<option [value]="1">1</option>
	<option [value]="2">2</option>
	<option [value]="3">3</option>
</combobox>
```

Users of such a control would have the ability to customize it by adding or removing components they want, reusing them
by simply nesting them inside the necessary tag.

By using this approach, you will eliminate the need for constantly updating the state in your controls, and their code
will only contain the necessary business logic for their functionality. For example, opening the dropdown when text is
entered in the input or closing it when an item is selected from the list. As a result, your code will be reduced to
just a few lines. Please check examples to see how it works in practice.
