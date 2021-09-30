import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducers';
import userReducer from './users/user.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const reducers = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    cart: cartReducer,
  }),
);

export default reducers;

export type RootState = ReturnType<typeof reducers>;
