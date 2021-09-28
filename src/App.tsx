import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { HomePage, ShopPage, SignInPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';
import AuthUser from './shared/types/AuthUser';

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
      }

      this.setState({
        currentUser: userAuth as AuthUser,
      });
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
