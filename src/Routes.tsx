import { Route, Switch } from 'react-router-dom';
import Country from './pages/Country';
import MainPage from './pages/MainPage';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    {/* <Route path="/country/:id" exact component={Country} /> */}
    <Route path="/country/" exact component={Country} />
  </Switch>
);

export default Routes;
