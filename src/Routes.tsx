import { Route } from 'react-router-dom';
import Country from './components/Country/Country';
import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={MainPage} />
    <Route path="/country/:id" exact component={Country} />
    <Route path="/country/" exact component={CountryPage} />
  </>
);

export default Routes;
