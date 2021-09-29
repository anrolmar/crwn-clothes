import { createSelector } from 'reselect';
import { RootState } from '../index';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.items);
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity!, 0),
);
