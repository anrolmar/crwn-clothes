import './cart-dropdown.scss';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button } from '../../../shared/components/forms';
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
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </Button>
    </div>
  );
};

interface CartDropdownSelectorProps {
  items: ICartItem[];
}
const mapStateToProps = createStructuredSelector<RootState, CartDropdownSelectorProps>({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
