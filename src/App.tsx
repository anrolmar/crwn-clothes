import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import ShowPage from './pages/ShowPage';

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShowPage} />
    </Switch>
  </div>
);
export default App;
