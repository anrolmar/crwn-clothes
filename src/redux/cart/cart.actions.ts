import { CartActionType } from './cart.action-types';
import { ICartItem } from '../../shared/types';

export interface AddCartItemAction {
  type: CartActionType.ADD_ITEM;
  payload: ICartItem;
}
export interface ToggleCartHiddenAction {
  type: CartActionType.TOGGLE_CART_HIDDEN;
}

export type CartAction = AddCartItemAction | ToggleCartHiddenAction;
