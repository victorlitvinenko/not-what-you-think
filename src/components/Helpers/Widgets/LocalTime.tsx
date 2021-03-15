import React, { useEffect, useState } from 'react';
import UiStore from '../../../stores/ui-store';
import translations from '../../../libs/translations';
import styles from './Widgets.module.css';

const addNull = (value: number) => {
  return value < 10 ? `0${value}` : `${value}`;
};

const getDateforUTC = (timestamp: number, utc?: string | null | undefined) => {
  const MINUTE: number = 60 * 1000;
  const HOUR: number = 60 * 60 * 1000;
  const localDate: Date = new Date(timestamp);
  const corection = utc ? +utc * HOUR : 0;
  const countryTimestamp: number =
    timestamp + +localDate.getTimezoneOffset() * MINUTE + corection;
  return new Date(countryTimestamp);
};

const getLocalTimeString = (date: Date) =>
  `${addNull(date.getHours())}:${addNull(date.getMinutes())}:${addNull(
    date.getSeconds()
  )}`;

type Props = {
  locality: string | null | undefined;
  utc: string | null | undefined;
  capital: string | undefined;
};

const LocalTime: React.FC<Props> = ({ utc = null, capital }) => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const countryDate = getDateforUTC(timestamp, utc);
  const t = translations[UiStore.language];

  const getDayString = (date: Date) => {
    const DAYS: string[] = [
      t.monday,
      t.tuesday,
      t.wednesday,
      t.thursday,
      t.friday,
      t.saturday,
      t.sunday,
    ];
    return DAYS[date.getDay()];
  };

  const getDateString = (date: Date) => {
    const Months: Record<string, string> = {
      Jan: t.january,
      Feb: t.february,
      Mar: t.march,
      Apr: t.april,
      May: t.may,
      Jun: t.june,
      Jul: t.july,
      Aug: t.august,
      Sep: t.september,
      Oct: t.october,
      Nov: t.november,
      Dec: t.december,
    };
    const dateArray: string[] = date.toString().split(' ');
    return `${Months[dateArray[1]]} ${addNull(+dateArray[2])} ${dateArray[3]}`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.LocalTime}>
      <h4>{capital}</h4>
      <span>{getDateString(countryDate)}</span>
      <h4>{getDayString(countryDate)}</h4>
      <span>{getLocalTimeString(countryDate)}</span>
    </div>
  );
};
export default LocalTime;
