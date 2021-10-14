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
import StripeCheckoutButton from '../../components/cart/stripe-button/StripeButton';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const CheckOutPage: React.FC = () => {
  const cartItems = useSelector(useMemo(() => selectCartItems, []));
  const total = useSelector(useMemo(() => selectCartTotal, []));

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
        <span>{`TOTAL: ${total}`}</span>
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

export default CheckOutPage;
