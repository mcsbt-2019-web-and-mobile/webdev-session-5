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
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
