import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import info from '../modules/info';
import answers from '../modules/answers';
import storage from '../modules/storage';
import errors from '../modules/errors';


const persistKeys = [
  'storage',
  'info',
  'answers',
];


const initLocalStorage = () => persistState(persistKeys, { key: '04_03_2019' });
const isNode = typeof window === 'undefined';


const rawReducers = {
  storage,
  info,
  answers,
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
