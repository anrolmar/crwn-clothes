import './cart-dropdown.scss';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Button } from '../../../shared/components/forms';
import { CartContext } from '../../../providers/cart/cart.provider';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';

const CartDropdown: React.FC<RouteComponentProps> = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          toggleHidden();
        }}
      >
        Go to Checkout
      </Button>
    </div>
  );
};

export default withRouter(CartDropdown);
