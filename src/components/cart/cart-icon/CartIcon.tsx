import { CartIconContainer, ItemCountContainer, ShoppingIconContainer } from './cart-icon.styles';

import { CartAction } from '../../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
import { RootState } from '../../../redux/root.reducers';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../../redux/cart/cart.action-creators';

interface CartIconProps {
  itemCount: number;
  toggleCartHidden: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, toggleCartHidden }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
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
