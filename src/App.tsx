import './App.css';

import { CheckOutPage, HomePage, LoginPage, ShopPage } from './pages';
import { Redirect, Route, Switch } from 'react-router';
import { auth, createUserProfileDocument } from './firebase/firebase';

import CurrentUserContext from './contexts/current-user/current-user.context';
import Header from './components/header/Header';
import { IAuthUser } from './shared/models';
import React from 'react';

interface AppState {
  currentUser: IAuthUser | null;
}

class App extends React.Component<{}, AppState> {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userSnapshot = await createUserProfileDocument(userAuth, null);
        if (userSnapshot) {
          this.setState({
            currentUser: {
              uid: userSnapshot.id,
              ...userSnapshot.data(),
            },
          });
        }
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/sign-in" render={() => (this.state.currentUser ? <Redirect to="/" /> : <LoginPage />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
