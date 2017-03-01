/**
 * Global css is here to get picked up by other build processes
 */
import globalStyles from './general-styles/global.css';

/**
 * Everything just gets set up here, nothing more. 
 * 
 * For mroe relevant application code, refer to ./app.js
 * 
 * Also, I love to put my general hacks here 
 * (for instance, if you are messing with inlined lazy loaded css hacks, this is your place)
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import appDataReducers from "./data/reducers";

/**
 * This is what is where the data for the whole app will live
 */

let store = createStore(appDataReducers);

import App from "./app";

ReactDOM.render(
    React.createElement(App,  { store }), 
    window.document.getElementById('app'));

