import React, { useCallback } from 'react';

import LocalTime from './LocalTime';
import Weather from './Weather';
import CurrencyExchangeRates from './CurrencyExchangeRates';
import styles from './Widgets.module.css';

type Props = {
  location: string | null | undefined;
};

const Widgets: React.FC<Props> = ({ location }) => {
  const locality = location || 'Minsk';
  const weatherURL = `http://api.weatherapi.com/v1/current.json?key=a3f00bbdcdd14af0b89215725211403&q=${locality}&aqi=yes`;
  const currencyURL = 'http://';

  const getWeather = useCallback(() => {
    return fetch(weatherURL).then((response) => {
      if (response.ok) return response.json();
      return null;
    });
  }, [weatherURL]);

  const getCurrencies = useCallback(() => {
    return fetch(currencyURL).then((response) => {
      if (response.ok) return response.json();
      return null;
    });
  }, [currencyURL]);

  return (
    <div className={styles.Widgets}>
      <LocalTime utc="-11" />
      <LocalTime utc={null} />
      <Weather getWeather={getWeather} />
      <CurrencyExchangeRates getCurrencies={getCurrencies} />
    </div>
  );
};
export default Widgets;
