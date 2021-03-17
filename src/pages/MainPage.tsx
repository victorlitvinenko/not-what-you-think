/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import CountryStore from '../stores/country-store';
import { CountryType } from '../stores/country';
import UiStore from '../stores/ui-store';
import translations from '../libs/translations';

const MainPage: React.FC = () => {
  const t = translations[UiStore.language];

  return (
    <div className="main-page df align-items-center justify-content-center">
      {CountryStore.isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="df justify-content-between w-100 flex-wrap">
            {CountryStore.countries.map((country: CountryType) => (
              <Link
                key={country._id}
                className={`country_card_link ${country.className}`}
                to={`/country/${country._id}`}
              >
                <div className="mt-4">
                  <Card
                    key={country.name}
                    style={{
                      width: '22rem',
                      boxShadow: '5px 5px 20px 5px #0022462e',
                    }}
                  >
                    <Card.Img variant="top" src={country.image} />
                    <Card.Body>
                      <Card.Title>{country.name}</Card.Title>
                      <Card.Text className="select-none">
                        {country.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted select-none">
                        {t.capital}: {country.capital}
                      </small>
                    </Card.Footer>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default observer(MainPage);
