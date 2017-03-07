import { combineReducers } from 'redux';
import globalCounterReducer from './exampleReducer.js';
import bggReducer from './bggReducer.js'

/**
 * here we define key in store that reducer will control
 */
const appDataReducers = combineReducers({
  globalCounter: globalCounterReducer,
  bggHotGames: bggReducer
});

export default appDataReducers;