import { CartActionType } from './cart.action-types';
import { ICartItem } from '../../shared/models';

export interface AddCartItemAction {
  type: CartActionType.ADD_ITEM;
  payload: ICartItem;
}

export interface ClearItemFromCartAction {
  type: CartActionType.CLEAR_ITEM_FROM_CART;
  payload: ICartItem;
}

export interface RemoveItemCartAction {
  type: CartActionType.REMOVE_ITEM;
  payload: ICartItem;
}

export interface ToggleCartHiddenAction {
  type: CartActionType.TOGGLE_CART_HIDDEN;
}

export type CartAction = AddCartItemAction | ClearItemFromCartAction | RemoveItemCartAction | ToggleCartHiddenAction;
