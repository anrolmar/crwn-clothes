import { CartActionType } from './cart.action-types';

export interface ToggleCartHiddenAction {
  type: CartActionType.TOGGLE_CART_HIDDEN;
}

export type CartAction = ToggleCartHiddenAction;
