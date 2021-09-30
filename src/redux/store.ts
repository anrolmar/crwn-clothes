import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';
import reducers from './index';

const middlewares = [logger];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
