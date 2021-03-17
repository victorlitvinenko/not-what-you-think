/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { XCircle } from 'react-feather';
import CountryStore from '../../stores/country-store';
import UiStore from '../../stores/ui-store';
import translations from '../../libs/translations';
import { CountryType } from '../../stores/country';

import styles from './inputsearch.module.scss';

const InputSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [outClicked, setOutClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const t = translations[UiStore.language];

  useEffect(() => {
    CountryStore.filterCountries(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Form.Group style={{ position: 'relative' }} className="ml-3">
      <FormControl
        type="text"
        placeholder={t.searchCountry}
        onFocus={() => setOutClicked(false)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputRef}
      />
      <span
        tabIndex={0}
        role="button"
        onKeyDown={() => null}
        onClick={() => setSearchTerm('')}
        className={styles.clear}
      >
        <XCircle color="#333" size={16} />
      </span>
      {searchTerm && !outClicked ? (
        <div className={styles.inputsearch} style={{ position: 'absolute' }}>
          {CountryStore.countries.map((item: CountryType) => {
            return (
              <Link
                onClick={() => setOutClicked(true)}
                key={item._id}
                to={`/country/${item._id}`}
                className={item.className}
              >
                <div>{item.name}</div>
              </Link>
            );
          })}
        </div>
      ) : null}
    </Form.Group>
  );
};

export default observer(InputSearch);
