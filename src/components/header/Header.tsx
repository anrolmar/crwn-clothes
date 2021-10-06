import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

import CartDropdown from '../cart/cart-dropdown/CartDropdown';
import CartIcon from '../cart/cart-icon/CartIcon';
import { IAuthUser } from '../../shared/models';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { RootState } from '../../redux/root.reducers';
import { auth } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/users/user.selectors';

interface HeaderProps {
  currentUser: IAuthUser | null;
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentUser, hidden }) => {
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
          <OptionLink as="div" className="option" onClick={() => auth.signOut()}>
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

interface HeaderSelectorProps {
  currentUser: IAuthUser | null;
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<RootState, HeaderSelectorProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
