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
import { useEffect } from 'react';

interface AppProps {
  currentUser: IAuthUser | null;
  checkUserSession: () => void;
}

const App: React.FC<AppProps> = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route exact path="/sign-in" render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)} />
      </Switch>
    </div>
  );
};

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
