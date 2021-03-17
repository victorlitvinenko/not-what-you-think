/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ExchangeField from './ExchangeField';
// import styles from './Widgets.module.css';

interface Currencies {
  base: string;
  rates: Record<string, number>;
}
type Quantities = Record<string, number>;

type Props = {
  getRates: () => Promise<Currencies | null>;
};

const CurrencyExchangeRates: React.FC<Props> = ({ getRates }) => {
  const requestInterval = 5 * 60 * 60 * 1000;

  const [rates, setRates] = useState<Currencies | null>(null);
  const [quantities, setQuantities] = useState<Quantities>({});

  const currencies: string[] = rates
    ? [rates.base, ...Object.keys(rates.rates)]
    : ['', '', '', ''];

  const setCurrenciesQuantities = (currency: string, quantity: number) => {
    if (!rates) return;
    const index = currencies.findIndex((item) => item === currency);
    const baseQuantity =
      index === 0 ? quantity : quantity / rates.rates[currency];
    setQuantities({
      [currencies[0]]: baseQuantity,
      [currencies[1]]:
        index === 1 ? quantity : baseQuantity * rates.rates[currency[1]],
      [currencies[2]]:
        index === 2 ? quantity : baseQuantity * rates.rates[currency[2]],
      [currencies[3]]:
        index === 3 ? quantity : baseQuantity * rates.rates[currency[3]],
    });
  };

  useEffect(() => {
    getRates().then((response) => setRates(response));

    const id = setInterval(() => {
      getRates().then((response) => setRates(response));
    }, requestInterval);

    return () => clearInterval(id);
  }, [getRates, requestInterval]);

  useEffect(() => {
    setCurrenciesQuantities(currencies[0], quantities[currencies[0]]);
  }, [rates]);

  // console.log(rates);
  // console.log(currencies);
  // console.log(quantities);

  return (
    <div>
      <ExchangeField
        currency={currencies[0]}
        quantity={quantities[currencies[0]]}
        onChange={setCurrenciesQuantities}
        main
      />
      <ExchangeField
        currency={currencies[1]}
        quantity={quantities[currencies[1]]}
        onChange={setCurrenciesQuantities}
      />
      <ExchangeField
        currency={currencies[2]}
        quantity={quantities[currencies[2]]}
        onChange={setCurrenciesQuantities}
      />
      <ExchangeField
        currency={currencies[3]}
        quantity={quantities[currencies[3]]}
        onChange={setCurrenciesQuantities}
      />
    </div>
  );
};

export default CurrencyExchangeRates;
