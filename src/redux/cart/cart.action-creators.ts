import { CartActionType } from './cart.action-types';
import { ToggleCartHiddenAction } from './cart.actions';

export const toggleCartHidden = (): ToggleCartHiddenAction => {
  return {
    type: CartActionType.TOGGLE_CART_HIDDEN,
  };
};
