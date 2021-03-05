import { Route, Switch } from 'react-router-dom';
import Country from './pages/Country/Country';
import MainPage from './pages/MainPage/MainPage';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/country/:id" exact component={Country} />
  </Switch>
);

export default Routes;
