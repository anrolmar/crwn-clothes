import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { AuthUser } from '../../shared/types';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reducers';

interface HeaderProps {
  currentUser: AuthUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(Header);
