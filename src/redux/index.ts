import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import userReducer from './users/user.reducer';

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
