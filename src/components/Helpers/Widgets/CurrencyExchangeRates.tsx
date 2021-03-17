/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ExchangeField from './ExchangeField';
import UiStore from '../../../stores/ui-store';
import translations from '../../../libs/translations';
import styles from './Widgets.module.css';
import { MathRound10 } from '../../../utils/utils';

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
  const t = translations[UiStore.language];
  const ROUNDING = -4;
  const CUR_DEFAULT_QUANTITY = MathRound10(1, 0);

  const [rates, setRates] = useState<Currencies | null>(null);
  const [quantities, setQuantities] = useState<Quantities | null>(null);

  const currencies: string[] = rates
    ? [rates.base, ...Object.keys(rates.rates)]
    : ['', '', '', ''];

  const setCurrenciesQuantities = (currency: string, quantity: number) => {
    if (!rates || !currency || !quantity) return;

    const index = currencies.findIndex((item) => item === currency);
    const baseQuantity =
      index === 0
        ? MathRound10(quantity, ROUNDING)
        : MathRound10(quantity / rates.rates[currency], ROUNDING);

    setQuantities({
      [currencies[0]]: baseQuantity,
      [currencies[1]]:
        index === 1
          ? MathRound10(quantity, ROUNDING)
          : MathRound10(baseQuantity * rates.rates[currencies[1]], ROUNDING),
      [currencies[2]]:
        index === 2
          ? MathRound10(quantity, ROUNDING)
          : MathRound10(baseQuantity * rates.rates[currencies[2]], ROUNDING),
      [currencies[3]]:
        index === 3
          ? MathRound10(quantity, ROUNDING)
          : MathRound10(baseQuantity * rates.rates[currencies[3]], ROUNDING),
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
    setCurrenciesQuantities(
      currencies[0],
      !quantities ? CUR_DEFAULT_QUANTITY : quantities[currencies[0]]
    );
    return () => setCurrenciesQuantities(currencies[0], 0);
  }, [rates]);

  console.log(rates);
  return currencies && quantities ? (
    <div className={styles.CurrencyExchangeRates}>
      <h4 className={styles.exchangeRatesHeader}>{t.CE_header}</h4>
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
  ) : null;
};

export default CurrencyExchangeRates;
