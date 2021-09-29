import { CartActionType } from './cart.action-types';
import { CartAction } from './cart.actions';

interface CartState {
  hidden: boolean;
}

const INITIAL_STATE: CartState = {
  hidden: true,
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      console.log('Toggle Cart Hidden');
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
