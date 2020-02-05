
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';
//import * as serviceWorker from './serviceWorker';
//redux and react-redux
import store from './store';
import {Provider} from 'react-redux'; 
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  
const app=(
   <Provider store={store} ><Router><App /></Router></Provider>
);

ReactDOM.render(app, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// /serviceWorker.unregister();

