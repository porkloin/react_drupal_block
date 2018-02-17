import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <br />
        <p>
          This React App is customized to be embedded in a Drupal Block. If a Node context UUID is available, it will be printed below:
        </p>
        <p>
          {this.props.DrupalNodeUUID ? this.props.DrupalNodeUUID : 'No UUID found! Are you running this in a Drupal block, or on a local yarn dev server?'}
        </p>
      </div>
    );
  }
}

export default App;
