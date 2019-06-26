import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

const Home = () => (
  <h1>this is the home</h1>
);

const About = () => (
  <h1>We're really cool people</h1>
);

const Store = () => (
  <h1>buy our junk</h1>
);


const App = () => (
  <div id="base">
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/store" component={Store}/>    
  </div>
);


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
