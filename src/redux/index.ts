import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducers';
import userReducer from './users/user.reducers';

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
