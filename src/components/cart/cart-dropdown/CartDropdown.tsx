import { Button } from '../../../shared/components/forms';
import './cart-dropdown.scss';

const CartDropdown: React.FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
