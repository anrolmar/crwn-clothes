import './cart-dropdown.scss';
import { Button } from '../../../shared/components/forms';
import { connect } from 'react-redux';
import { ICartItem } from '../../../shared/types';
import { RootState } from '../../../redux';
import CartItem from '../cart-item/CartItem';

interface CartDropdownProps {
  items: ICartItem[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Go to Checkout</Button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(CartDropdown);
