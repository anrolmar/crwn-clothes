import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducers from './root.reducers';
import rootSaga from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(sagaMiddleware);
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
