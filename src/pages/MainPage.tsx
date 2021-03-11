/* eslint-disable no-underscore-dangle */
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CountryStore from '../stores/country-store';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="df justify-content-between mt-4">
        {CountryStore.countries.map((country: Record<string, string>) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={country.image} />
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {country.capital}
              </Card.Subtitle>
              <Card.Text>{country.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Link to={`/country/${country._id}`}>{country.name}</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default observer(MainPage);
