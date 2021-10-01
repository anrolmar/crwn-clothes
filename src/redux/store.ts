import { applyMiddleware, createStore } from 'redux';

import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducers from './index';

const middlewares = [];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
