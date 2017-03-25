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
import { createElement } from 'react';
import render from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appDataReducers from "./data/reducers";
import rootSaga from './data/sagas';

/**
 * App is using redux-saga for handling side effects (async calls) 
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Store is single source of truth for the app, it is hub for all the data and data events
 * 
 * For long lasting processes we use redux-saga middleware.
 */
let store = createStore(
    appDataReducers, 
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(rootSaga);

import App from "./app";

render(
    createElement(App,  { store }), 
    window.document.getElementById('app'));

