import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';

const Item = (props) => {
    let active = props.active ? "active" : "";
    let classes = `nav-link ${active}`;
    return (<li className="nav-item"><a className={classes} href="#a" onClick={() => props.handleOnClick()}>{props.name}</a></li>);
}

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      active: "home"
    };
  }

  onClick = (name) => {
    this.setState({
      active: name
    })
  };

  render() {
    let items = ["home", "store", "about"];

    return (
      <ul className="nav nav-pills">
        {items.map((name) =>
          <Item name={name} active={this.state.active === name} handleOnClick={() => this.onClick(name)}/>
        )}
      </ul>
    );
  }
}

const Home = () => (<h1>this is the home</h1>);
const About = () => (<h1>about ussss</h1>);
const Store = () => (<h1>buy our stufffff</h1>);

const App = () => (
  <div>
    <Menu/>
 </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
