import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer.js';

const appDataReducers = combineReducers({
  exampleReducer
});

export default appDataReducers;