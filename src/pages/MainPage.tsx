import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import CountryStore from '../stores/country-store';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      {CountryStore.countries.map((country) => (
        <div key={country.name}>
          <Link to="/country/">
            <span>{country.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default observer(MainPage);
