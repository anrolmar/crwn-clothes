import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';

const App: React.FC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/sign-in" component={SignInPage} />
    </Switch>
  </div>
);
export default App;
