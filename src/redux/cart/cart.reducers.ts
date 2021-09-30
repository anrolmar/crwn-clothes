import { CartActionType } from './cart.action-types';
import { CartAction } from './cart.actions';
import { ICartItem } from '../../shared/types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

interface CartState {
  hidden: boolean;
  items: ICartItem[];
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

    case CartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
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
