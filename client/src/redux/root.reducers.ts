import cartReducer from './cart/cart.reducers';
import collectionReducer from './shop/shop.reducers';
import { combineReducers } from 'redux';
import directoryReducer from './directory/directory.reducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/user.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const reducers = persistReducer(
  persistConfig,
  combineReducers({
    cart: cartReducer,
    shop: collectionReducer,
    directory: directoryReducer,
    user: userReducer,
  }),
);

export default reducers;

export type RootState = ReturnType<typeof reducers>;
