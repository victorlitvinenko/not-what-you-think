/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountryStore, { CountryType } from '../../stores/country-store';

import styles from './inputsearch.module.scss';

const InputSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<CountryType[]>([]);
  const [outClicked, setOutClicked] = useState(false);

  useEffect(() => {
    const results: CountryType[] = CountryStore.countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <Form.Group style={{ position: 'relative' }} className="ml-3">
      <FormControl
        type="text"
        placeholder="Search country"
        onFocus={() => setOutClicked(false)}
        onBlur={() => setOutClicked(true)}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length && !outClicked ? (
        <div className={styles.inputsearch} style={{ position: 'absolute' }}>
          {searchResults.map((item: CountryType) => {
            return (
              <Link key={item._id} to={`/country/${item._id}`}>
                <div>{item.name}</div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </Form.Group>
  );
};

export default InputSearch;
