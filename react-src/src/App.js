import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeContent: []
    }
    const baseUrl = '/';
    //const baseUrl = 'http://react-drupal-block.lndo.site/';
    const path = 'api/content/' + this.props.DrupalNodeUUID;
    const getAndSetContent = (link) => {
      fetch(link)
      .then((response) => {
        return response.ok ? response.json() : Promise.reject(response.statusText);
      })
      .then(document => {
        console.log(document);
        this.setState(prevState => ({
          nodeContent: [...document]
        }));
      })
      .then(() => {
        this.setState(prevState => ({
          loading: false
        })
      )})
      .catch(console.log);
    }
    if (this.props.DrupalNodeUUID) {
      getAndSetContent(`${baseUrl}${path}`);
    }
  }

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
        <p>
        Using a JSON view, here are some vital stats about the node we are placed on:
        </p>
        { this.state.nodeContent.map((content) => {
          return (
            <div>
              <div>NID: {content.nid[0].value}</div>
              <div>Title: {content.title[0].value}</div>
              <div>Body: {content.body[0].value}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
