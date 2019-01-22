import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import stories from './modules/stories';


const rawReducers = {
  stories,
};


const initLocalStorage = () => persistState(['stories'], { key: 'state' });
const isNode = typeof window === 'undefined';


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);


const createEnhancers = () => {
  if (isNode) {
    return composeWithDevTools(middleware);
  }

  return composeWithDevTools(middleware, initLocalStorage());
};


export default createStore(reducers, initialState, createEnhancers());
