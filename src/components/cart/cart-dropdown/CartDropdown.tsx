import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
} from './cart-dropdown.styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { CartAction } from '../../../redux/cart/cart.actions';
import CartItem from '../cart-item/CartItem';
import { Dispatch } from 'redux';
import { ICartItem } from '../../../shared/models';
import { RootState } from '../../../redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.action-creators';

interface CartDropdownProps {
  items: ICartItem[];
  dispatch: Dispatch<CartAction>;
}

const CartDropdown: React.FC<CartDropdownProps & RouteComponentProps> = ({ items, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
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

interface CartDropdownSelectorProps {
  items: ICartItem[];
}
const mapStateToProps = createStructuredSelector<RootState, CartDropdownSelectorProps>({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
