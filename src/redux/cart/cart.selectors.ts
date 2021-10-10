import { RootState } from '../root.reducers';
import { createSelector } from 'reselect';

const selectCart = (state: RootState) => state.cart;

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
export const selectCartItems = createSelector([selectCart], (cart) => cart.items);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity!, 0),
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity! * item.price, 0),
);
