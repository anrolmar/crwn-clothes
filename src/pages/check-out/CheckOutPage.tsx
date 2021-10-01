import './checkout.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/cart/checkout-item/CheckoutItem';
import { ICartItem } from '../../shared/models';
import { RootState } from '../../redux';
import StripeCheckoutButton from '../../components/cart/stripe-button/StripeButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

interface CheckOutProps {
  cartItems: ICartItem[];
  total: number;
}

const CheckOutPage: React.FC<CheckOutProps> = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

interface CheckOutSelectorProps {
  cartItems: ICartItem[];
  total: number;
}

const mapStateToProps = createStructuredSelector<RootState, CheckOutSelectorProps>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
