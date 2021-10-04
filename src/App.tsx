import './App.css';

import { CheckOutPage, HomePage, LoginPage, ShopPage } from './pages';
import { Redirect, Route, Switch } from 'react-router';
import { auth, createUserProfileDocument } from './firebase/firebase';

import { Dispatch } from 'redux';
import Header from './components/header/Header';
import { IAuthUser } from './shared/models';
import React from 'react';
import { RootState } from './redux';
import { UserAction } from './redux/users/user.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/users/user.selectors';
import { setCurrentUser } from './redux/users/user.action-creators';

interface AppProps {
  currentUser: IAuthUser | null;
  setCurrentUser: (authUser: IAuthUser | null) => void;
}

interface AppState {
  currentUser: IAuthUser | null;
}

class App extends React.Component<AppProps, AppState> {
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);
        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            uid: snapShot.id,
            ...snapShot.data(),
          });
        });
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
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/sign-in" render={() => (this.props.currentUser ? <Redirect to="/" /> : <LoginPage />)} />
        </Switch>
      </div>
    );
  }
}

interface AppSelectorProps {
  currentUser: IAuthUser | null;
}
const mapStateToProps = createStructuredSelector<RootState, AppSelectorProps>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  setCurrentUser: (user: IAuthUser | null) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
