import './cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { Dispatch } from 'redux';
import { CartAction } from '../../../redux/cart/cart.actions';
import { toggleCartHidden } from '../../../redux/cart/cart.action-creators';
import { connect } from 'react-redux';

interface CartIconProps {
  toggleCartHidden: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
