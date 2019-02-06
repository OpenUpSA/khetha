import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import info from '../modules/info';
import tasks from '../modules/tasks';
import storage from '../modules/storage';
import errors from '../modules/errors';


const persistKeys = [
  'storage',
  'info',
  'tasks',
];


const initLocalStorage = () => persistState(persistKeys, { key: 'state' });
const isNode = typeof window === 'undefined';


const rawReducers = {
  storage,
  info,
  tasks,
  errors,
};


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);


const createEnhancers = () => {
  if (isNode) {
    return composeWithDevTools(middleware);
  }

  return composeWithDevTools(middleware, initLocalStorage());
};


export default createStore(reducers, initialState, createEnhancers());
