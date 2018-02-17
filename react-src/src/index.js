import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//attempt to snag UUID that got injected into our twig template.
var uuid = document.getElementById('react').getAttribute("class");


ReactDOM.render(<App DrupalNodeUUID={uuid} />, document.getElementById('react'));
registerServiceWorker();
