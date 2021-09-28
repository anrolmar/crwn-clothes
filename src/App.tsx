import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { HomePage, LoginPage, ShopPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { AuthUser } from './shared/types';
import { connect } from 'react-redux';
import { Action } from './redux/actions/actions';
import { setCurrentUser } from './redux/actions/user.actions';
import { Dispatch } from 'redux';

interface AppProps {
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
          <Route path="/sign-in" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setCurrentUser: (user: AuthUser | null) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
