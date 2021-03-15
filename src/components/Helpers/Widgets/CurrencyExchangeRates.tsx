import styles from './Widgets.module.css';

type Props = {
  getCurrencies: () => Promise<string>;
};

const CurrencyExchangeRates: React.FC<Props> = () => {
  return (
    <div className={styles.CurrencyExchangeRates}>Currency exchange rates</div>
  );
};
export default CurrencyExchangeRates;
