import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import launchCollection from './launchCollectionReducer';
import rocketCollection from './rocketCollectionReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)));

export default store;
