import React, { useCallback } from 'react';

import LocalTime from './LocalTime';
import Weather from './Weather';
import CurrencyExchangeRates from './CurrencyExchangeRates';
import styles from './Widgets.module.css';

type Props = {
  timeZone: Record<string, string> | undefined;
  capital: string | undefined;
  currency: string | undefined;
};

const getCurrencyCode = (currency: string | undefined) => {
  if (!currency) return '';
  const curArray: string[] = currency.split(' ');
  return curArray[curArray.length - 1].replace(/\(/g, '').replace(/\)/g, '');
};

const Widgets: React.FC<Props> = ({ timeZone, capital, currency }) => {
  const locality = timeZone?.locality || 'Minsk';
  const utc = timeZone?.utc || null;

  const currencyCode = getCurrencyCode(currency);
  const currencies = ['USD', 'EUR', 'RUB'];
  const alternativeCurrency = 'GBP';

  const currenciesToRequest = !currencies.includes(currencyCode)
    ? currencies
    : [
        ...currencies.filter((item) => item !== currencyCode),
        alternativeCurrency,
      ];

  const weatherURL = `https://api.weatherapi.com/v1/current.json?key=a3f00bbdcdd14af0b89215725211403&q=${locality}&aqi=yes`;
  const currencyURL = `https://api.exchangerate.host/latest?base=${currencyCode}&symbols=${currenciesToRequest.join(
    ','
  )}`;

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
      <LocalTime utc={utc} locality={locality} capital={capital} />
      <Weather getWeather={getWeather} />
      <CurrencyExchangeRates getRates={getCurrencies} />
    </div>
  );
};
export default Widgets;
