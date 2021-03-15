import React from 'react';
import styles from './Widgets.module.css';

type Props = {
  getCurrencies: () => Promise<any>;
};

const CurrencyExchangeRates: React.FC<Props> = ({ getCurrencies }) => {
  return (
    <div className={styles.CurrencyExchangeRates}>Currency exchange rates</div>
  );
};
export default CurrencyExchangeRates;
