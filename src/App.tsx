import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './components/header/Header';
import { HomePage, ShopPage, SignInPage } from './pages';
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';

interface AppState {
  currentUser: any | null;
}
class App extends React.Component<{}, AppState> {
  state = { currentUser: null };
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);
        userRef?.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({
        currentUser: userAuth,
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
