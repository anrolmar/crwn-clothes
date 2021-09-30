import './header.scss';

import CartDropdown from '../cart/cart-dropdown/CartDropdown';
import CartIcon from '../cart/cart-icon/CartIcon';
import { IAuthUser } from '../../shared/models';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { RootState } from '../../redux';
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
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
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
