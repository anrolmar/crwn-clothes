import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { AUTH } from './constants';
import { HomePage, ShopPage, SignInPage } from './pages';
import { auth } from './firebase/firebase';
import firebase from 'firebase/compat/app';
import './App.css';

interface AppState {
  currentUser: firebase.User | null;
}

class App extends React.Component<{}, AppState> {
  state: AppState = AUTH;
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
