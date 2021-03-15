import React, { useCallback } from 'react';

import LocalTime from './LocalTime';
import Weather from './Weather';
import CurrencyExchangeRates from './CurrencyExchangeRates';
import styles from './Widgets.module.css';

type Props = {
  timeZone: Record<string, string> | undefined;
};

const Widgets: React.FC<Props> = ({ timeZone }) => {
  const locality = timeZone?.locality || 'Minsk';
  const utc = timeZone?.utc || null;
  // const {locality = 'Minsk', utc =  null} = timeZone;
  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=a3f00bbdcdd14af0b89215725211403&q=${locality}&aqi=yes`;
  const currencyURL = 'https://';

  // console.log(locality, utc);

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
      <LocalTime utc={utc} locality={locality} />
      {/* <LocalTime utc={null} locality={locality} /> */}
      <Weather getWeather={getWeather} />
      <CurrencyExchangeRates getCurrencies={getCurrencies} />
    </div>
  );
};
export default Widgets;
