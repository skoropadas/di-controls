# {{ NgDocPage.title }}

DIControls includes several classes that can be used to create controls. Below, we will examine
these classes and their
usage options.

## DIControl

`DIControl` is the base class that takes the model "as is" and updates it without additional
modifications. This class is
suitable for implementing most UI controls. By using it, you can implement both parent components
that accumulate and
facilitate communication between child controls and simple input directives.

```html
<combobox> <!-- DIControl -->
  <input inputString> <!-- DIControl -->

  <option *ngFor="let user of users" [value]="user">
    {{ '{{ user.name }}' | safe }}
  </option>
</combobox>
```

Please see following articles:

- `DIControl`
- `*InputsPage`
