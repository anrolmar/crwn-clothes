import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { IAuthUser } from '../../shared/types';
import { connect } from 'react-redux';
import { RootState } from '../../redux';
import CartIcon from '../cart/cart-icon/CartIcon';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/users/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

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
