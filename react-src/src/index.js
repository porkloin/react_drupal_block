import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//attempt to snag UUID that got injected into our twig template.
var uuid = document.getElementById('react').dataset.uuid;
var bundle = document.getElementById('react').dataset.bundle;


ReactDOM.render(<App DrupalNodeUUID={uuid} DrupalBundle={bundle} />, document.getElementById('react'));
registerServiceWorker();
