import './App.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { HomePage, LoginPage, ShopPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/users/user.action-creators';
import { Dispatch } from 'redux';
import { AuthUser } from './shared/types';
import { RootState } from './redux';
import { UserAction } from './redux/users/user.actions';

interface AppProps {
  currentUser: AuthUser | null;
  setCurrentUser: (authUser: AuthUser | null) => void;
}

interface AppState {
  currentUser: AuthUser | null;
}

class App extends React.Component<AppProps, AppState> {
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userSnapshot = await createUserProfileDocument(userAuth, null);
        if (userSnapshot) {
          setCurrentUser({
            uid: userSnapshot.id,
            ...userSnapshot.data(),
          });
        }
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: RootState) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  setCurrentUser: (user: AuthUser | null) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
