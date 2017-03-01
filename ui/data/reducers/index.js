import { combineReducers } from 'redux';
import globalCounterReducer from './exampleReducer.js';

/**
 * here we define key in store that reducer will control
 */
const appDataReducers = combineReducers({
  globalCounter: globalCounterReducer
});

export default appDataReducers;