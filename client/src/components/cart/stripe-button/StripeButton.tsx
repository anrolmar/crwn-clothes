import StripeCheckout, { Token } from 'react-stripe-checkout';

import axios from 'axios';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JffZqErHOzBfsSecMd8n98cmC4fElSLc8VsUpBsSy5enW9PhtrFVKH9NHp5FbYE4KGs2rUMKRPlsqogkiAqSB7s001LOPFlOW';

  const onToken = (token: Token) => {
    axios
      .post('payment', { amount: priceForStripe, token })
      .then(() => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment. Please sure you use the provided credit card');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
