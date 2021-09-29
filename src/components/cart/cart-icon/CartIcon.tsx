import './cart-icon.scss';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { Dispatch } from 'redux';
import { CartAction } from '../../../redux/cart/cart.actions';
import { toggleCartHidden } from '../../../redux/cart/cart.action-creators';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

interface CartIconProps {
  itemCount: number;
  toggleCartHidden: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

interface CartIconSelectorProps {
  itemCount: number;
}
const mapStateToProps = createStructuredSelector<RootState, CartIconSelectorProps>({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
