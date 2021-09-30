import { CartActionType } from './cart.action-types';
import {
  ToggleCartHiddenAction,
  AddCartItemAction,
  ClearItemFromCartAction,
  RemoveItemCartAction,
} from './cart.actions';
import { ICartItem } from '../../shared/types';

export const addItem = (item: ICartItem): AddCartItemAction => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item: ICartItem): ClearItemFromCartAction => {
  return {
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const removeItem = (item: ICartItem): RemoveItemCartAction => {
  return {
    type: CartActionType.REMOVE_ITEM,
    payload: item,
  };
};

export const toggleCartHidden = (): ToggleCartHiddenAction => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};
