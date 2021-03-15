import React, { useEffect, useState } from 'react';
import styles from './Widgets.module.css';

interface Wether {
  current: {
    condition: {
      icon: string;
    };
    temp_c: number;
    temp_f: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    humidity: number;
    pressure_in: number;
    pressure_mb: number;
  };
  location: Record<string | number, unknown>;
}

type Props = {
  getWeather: () => Promise<Wether | null>;
};

const Weather: React.FC<Props> = ({ getWeather }) => {
  const requestInterval = 5 * 60 * 60 * 1000;
  const [weather, setWeather] = useState<Wether | null>(null);

  useEffect(() => {
    getWeather().then((response) => {
      // console.log(response);
      setWeather(response);
    });
    const id = setInterval(() => {
      getWeather().then((response) => {
        setWeather(response);
      });
    }, requestInterval);
    return () => clearInterval(id);
  }, [getWeather, requestInterval]);

  return weather ? (
    <div className={styles.Weather}>
      <div className={styles.wetherMainBlock}>
        <img
          src={weather?.current?.condition?.icon}
          alt="weather icon"
          className={styles.wetherIcon}
        />
        <div className={styles.temperatureBlock}>
          <span>{`${weather?.current?.temp_c}`}</span>
          <span> &#8451; / </span>
          <span>{`${weather?.current?.temp_f}`}</span>
          <span> &#8457;</span>
        </div>
      </div>
      <div className={styles.wetherAdditionalBlock}>
        <div>
          <span>wind: </span>
          <span>{weather?.current?.wind_dir} </span>
          <span>{weather?.current?.wind_kph} km/h</span>
        </div>
        <div>
          <span>humidity: </span>
          <span>{weather?.current?.humidity}%</span>
        </div>
        <div>
          <span>atm. pressure: </span>
          <span>{weather?.current?.pressure_mb} mbar</span>
        </div>
      </div>
    </div>
  ) : null;
};
export default Weather;
