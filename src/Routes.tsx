import { Route, Switch } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    {/* <Route path="/country/:id" exact component={Country} /> */}
    <Route path="/country/" exact component={CountryPage} />
  </Switch>
);

export default Routes;
