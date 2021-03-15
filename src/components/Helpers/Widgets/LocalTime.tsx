import React, { useEffect, useState } from 'react';
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

const getDayString = (date: Date) => {
  enum DAYS {
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  }
  return DAYS[date.getDay()];
};

const getDateString = (date: Date) => {
  const Months: Record<string, string> = {
    Jan: 'january',
    Feb: 'february',
    Mar: 'march',
    Apr: 'april',
    May: 'may',
    Jun: 'june',
    Jul: 'july',
    Aug: 'august',
    Sep: 'september',
    Oct: 'october',
    Nov: 'november',
    Dec: 'december',
  };
  const dateArray: string[] = date.toString().split(' ');
  return `${Months[dateArray[1]]} ${addNull(+dateArray[2])} ${dateArray[3]}`;
};
const getLocalTimeString = (date: Date) =>
  `${addNull(date.getHours())}:${addNull(date.getMinutes())}:${addNull(
    date.getSeconds()
  )}`;

type Props = {
  locality: string | null | undefined;
  utc: string | null | undefined;
};

const LocalTime: React.FC<Props> = ({ utc = null, locality }) => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const countryDate = getDateforUTC(timestamp, utc);

  useEffect(() => {
    const id = setInterval(() => {
      setTimestamp(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.LocalTime}>
      <h4>{locality}</h4>
      <span>{getDateString(countryDate)}</span>
      <h4>{getDayString(countryDate)}</h4>
      <span>{getLocalTimeString(countryDate)}</span>
    </div>
  );
};
export default LocalTime;
