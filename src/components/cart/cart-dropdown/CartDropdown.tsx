import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles';
import { useDispatch, useSelector } from 'react-redux';

import { CartAction } from '../../../redux/cart/cart.actions';
import CartItem from '../cart-item/CartItem';
import { Dispatch } from 'redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.action-creators';
import { useHistory } from 'react-router';

const CartDropdown: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch<Dispatch<CartAction>>();
  const history = useHistory();

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessageContainer className="empty-message">Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
