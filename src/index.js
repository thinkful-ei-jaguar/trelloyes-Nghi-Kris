import React from 'react';
import ReactDOM from 'react';
import store from './store.js'
import App from './App.js'

ReactDOM.render(<App store={store.STORE} />, document.querySelector('#main'));