import './App.css';

import { CheckOutPage, HomePage, LoginPage, ShopPage } from './pages';
import { Redirect, Route, Switch } from 'react-router';

import { Dispatch } from 'redux';
import Header from './components/header/Header';
import { IAuthUser } from './shared/models';
import React from 'react';
import { RootState } from './redux/root.reducers';
import { UserAction } from './redux/users/user.actions';
import { checkUserSession } from './redux/users/user.action-creators';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/users/user.selectors';

interface AppProps {
  currentUser: IAuthUser | null;
  checkUserSession: () => void;
}

interface AppState {
  currentUser: IAuthUser | null;
}

class App extends React.Component<AppProps, AppState> {
  unsubscribeFromAuth = () => {};

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
