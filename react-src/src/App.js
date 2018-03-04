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
    const path = 'jsonapi/node/' + this.props.DrupalBundle + '/' + this.props.DrupalNodeUUID;
    const getAndSetContent = (link) => {
      fetch(link)
      .then((response) => {
        return response.ok ? response.json() : Promise.reject(response.statusText);
      })
      .then(document => {
        console.log(document);
        this.setState(prevState => ({
          nodeContent: document
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
          To get started, edit <code>src/App.js</code> and run <code>yarn build</code> to see your changes.
        </p>
        <br />
        <p>
          This React App is customized to be embedded in a Drupal Block.
        </p>
        <p>
         If a Node context UUID is available, we will use the <a href="http://drupal.org/project/jsonapi">Drupal JSON API module</a> to get some vital stats about the node we are located at:
        </p>
        <div>
          <div>{this.props.DrupalNodeUUID ? this.props.DrupalNodeUUID : 'No UUID found! Is this the front page? Or a local yarn dev server?'}</div>
          <div>NID: {this.state.loading === false ? this.state.nodeContent.data.attributes.nid : 'n/a'}</div>
          <div>Title: {this.state.loading === false ? this.state.nodeContent.data.attributes.title : 'n/a'}</div>
          <div>Body: {this.state.loading === false ? this.state.nodeContent.data.attributes.body.value : 'n/a'}</div>
        </div>
      </div>
    );
  }
}

export default App;
