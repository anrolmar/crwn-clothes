import { CartActionType } from './cart.action-types';
import { ToggleCartHiddenAction, AddCartItemAction } from './cart.actions';
import { CartItem } from '../../shared/types';

export const addItem = (item: CartItem): AddCartItemAction => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};

export const toggleCartHidden = (): ToggleCartHiddenAction => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};
