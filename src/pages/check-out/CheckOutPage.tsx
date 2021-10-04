import {
  CheckoutContainer,
  HeaderBlockContainer,
  HeaderContainer,
  StripeButtonContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';
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
    <CheckoutContainer>
      <HeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </HeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <WarningContainer>
        * Please use the following test credit card for payments *
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </WarningContainer>
      <StripeButtonContainer>
        <StripeCheckoutButton price={total} />
      </StripeButtonContainer>
    </CheckoutContainer>
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
