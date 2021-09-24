import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header-component/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App: React.FC = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);
export default App;
