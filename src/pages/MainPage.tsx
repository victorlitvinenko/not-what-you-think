/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-web';

import CountryStore from '../stores/country-store';

const MainPage: React.FC = () => {
  return (
    <div className="main-page df align-items-center justify-content-center">
      {CountryStore.isLoading ? (
        <Loader type="Loading" color="#00BFFF" height={300} width={300} />
      ) : (
        <>
          <div className="df justify-content-between w-100 mt-4">
            {CountryStore.countries.map((country: Record<string, string>) => (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={country.image} />
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
