import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { useDispatch, useSelector } from 'react-redux';

import CartDropdown from '../cart/cart-dropdown/CartDropdown';
import CartIcon from '../cart/cart-icon/CartIcon';
import { Dispatch } from 'redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserAction } from '../../redux/users/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/users/user.selectors';
import { signOutStart } from '../../redux/users/user.action-creators';
import { useMemo } from 'react';

const Header: React.FC = () => {
  const currentUser = useSelector(useMemo(() => selectCurrentUser, []));
  const hidden = useSelector(useMemo(() => selectCartHidden, []));
  const dispatch = useDispatch<Dispatch<UserAction>>();

  const googleSignOutHandleClick = () => {
    dispatch(signOutStart());
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop" className="option">
          SHOP
        </OptionLink>
        <OptionLink to="/shop" className="option">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" className="option" onClick={googleSignOutHandleClick}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/sign-in">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
