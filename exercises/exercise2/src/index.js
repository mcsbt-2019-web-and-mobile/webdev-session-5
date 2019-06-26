import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

const User = (props) => (
  <div id="user">
    <h2>page for user: {props.match.params.username}</h2>
  </div>
);

const Home = (props) => (
  <h1>this is the home</h1>
);

const App = () => (
  <div>
    <Route exact path="/" component={Home}/>
  </div>
);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

