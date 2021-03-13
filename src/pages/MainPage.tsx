/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

import CountryStore from '../stores/country-store';
import { CountryType } from '../stores/country';

const MainPage: React.FC = () => {
  return (
    <div className="main-page df align-items-center justify-content-center">
      {CountryStore.isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="df justify-content-between w-100 flex-wrap">
            {CountryStore.countries.map((country: CountryType) => (
              <Card
                className="mt-4"
                key={country.name}
                style={{
                  width: '22rem',
                  boxShadow: '5px 5px 20px 5px #0022462e',
                }}
              >
                <Link to={`/country/${country._id}`}>
                  <Card.Img variant="top" src={country.image} />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/country/${country._id}`}>{country.name}</Link>
                  </Card.Title>
                  <Card.Text>{country.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Capital: {country.capital}
                  </small>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default observer(MainPage);
