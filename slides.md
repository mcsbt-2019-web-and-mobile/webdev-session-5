---
title: session 5
subtitle: _More react!_
author: Pepe García
---

# plan for today

- function components
- react-router

# function components

##

The last day in class we created all our components by creating
classes like this:

```javascript
class MyComponent extends React.Component {
  // all the fun stuff
}
```

##

However, React provides an easier way for rendering components when we
don't need them to handle special state.  These kind of components is
called function components:

```javascript
const MyComponent = (props) => (
  <li>this is my component</li>
);
```

##

Let's see an example (example1).
