import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'jquery';
import '@popperjs/core/lib/popper'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch';


ReactDOM.render(<App />, document.getElementById('root'));
