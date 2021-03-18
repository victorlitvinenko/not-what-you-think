import { Route } from 'react-router-dom';

import CountryPage from './pages/CountryPage';
import MainPage from './pages/MainPage';

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={MainPage} />
    <Route path="/country/:id" exact component={CountryPage} />
  </>
);

export default Routes;
