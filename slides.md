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
  render() {
    return <li>this is my component</li>;
  }
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

# Single Page Applications

##

A SPA is an application that re-renders the HTML code dynamically in
the client side instead of letting the server render it.

##

They made snappier applications because we don't need to always wait
for the server to re-render HTML for each new page.

## How do they render different components?

##

With client side routing!

# React router

##

React router is a community project (not created by the React team @
FB) that integrates very nicely with React.

##

It has three main components

- The `Router`
- `Routes`
- `Links`

# Router

##

We need to wrap the components that will use routing in the `BrowserRouter`.

```javascript
ReactDOM.render(
  <BrowserRouter><MyComponent /></BrowserRouter>,
  document.getElementById('root'));
```

This will allow us to use routing inside this component

# Routes 

`<Route path="/about-us" component={MyComponent}/>`

##

Routes make it possible to handle different URLs.  The component
passed as `component` to the route will get rendered whenever the
`path` is matched.

## exact

There will be times in which more than one route matches a URL.  See example2.

## exact

`exact` will help us rendering certain components when the URL match is **EXACT**.

## exercise

do exercise1

# Links


