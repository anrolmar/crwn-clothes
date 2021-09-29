import { CartActionType } from './cart.action-types';
import { CartAction } from './cart.actions';
import { CartItem } from '../../shared/types';
import { addItemToCart } from './cart.utils';

interface CartState {
  hidden: boolean;
  items: CartItem[];
}

const INITIAL_STATE: CartState = {
  hidden: true,
  items: [],
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
