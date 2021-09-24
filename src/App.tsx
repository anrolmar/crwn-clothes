import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);
export default App;
