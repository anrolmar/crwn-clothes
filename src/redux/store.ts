import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import reducers from './index';

const middlewares = [logger];

const store = createStore(reducers, applyMiddleware(...middlewares));
export default store;
