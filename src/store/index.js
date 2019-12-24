import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// reducers
import memos from '../reducers/memos';

let middlewares = [ thunk ];
const reducers = {
  memos
};

if (__DEV__ === true) {
  middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middlewares),
  );

  return store;
};

export { configureStore };