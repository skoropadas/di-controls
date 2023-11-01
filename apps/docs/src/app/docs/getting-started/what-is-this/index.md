# {{ NgDocPage.title }}

DIControls is a library for creating reusable, flexible UI controls using a declarative approach.

Each component you create depends only on its own model, allowing for its reuse in many other
places. It also enables users of your controls to modify them, replace existing components in your
library, or extend your components by adding their own.

Additionally, this library minimizes the implementation of `ControlValueAccessor`, so all you need
to do is inherit from a specific class and trigger updates using the `this.updateModel(newModel)`
method, update the `touched` state using `this.touched()`, or process updates in
the `onIncomingUpdate` hook if necessary.
