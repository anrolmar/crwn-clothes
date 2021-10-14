import './header.scss';

import { CartContext } from '../../providers/cart/cart.provider';
import CartDropdown from '../cart/cart-dropdown/CartDropdown';
import CartIcon from '../cart/cart-icon/CartIcon';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704
import { useContext } from 'react';

const Header: React.FC = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

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

<<<<<<< HEAD
export default Header;
=======
interface HeaderSelectorProps {
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<RootState, HeaderSelectorProps>({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
>>>>>>> 13fbd2650ae46d57662ea5dc4d171a4630fbe704
