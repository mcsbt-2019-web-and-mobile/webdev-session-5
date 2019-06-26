import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

const Hello = () => (<h1>hello</h1>);
const Dolly = () => (<h1>dolly</h1>);

const App = () => (
  // What will happen when we access `http://localhost:3000/hello/dolly`?
  <div>
    <Route path="/hello" component={Hello}/>
    <Route path="/hello/dolly" component={Dolly}/>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
