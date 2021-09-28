import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { HomePage, LoginPage, ShopPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase';
import AuthUser from './shared/types/AuthUser';

import './App.css';

interface AppState {
  currentUser: AuthUser | null;
}
class App extends React.Component<{}, AppState> {
  state = { currentUser: null };
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
        this.setState({ currentUser: null });
      }
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
          <Route path="/sign-in" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
