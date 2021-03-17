import React, { useEffect, useState } from 'react';
import UiStore from '../../../stores/ui-store';
import translations from '../../../libs/translations';
import styles from './Widgets.module.css';

// const 获取天气 = (网址) => {
//   const 承诺 = fetch(网址)
//     .then((回应) => 回应.json())
//     .then((数据) => 数据);
// };

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

const windDirections: Record<string, string> = {
  W: 'west',
  E: 'east',
  S: 'south',
  N: 'north',
};

type Props = {
  getWeather: () => Promise<Wether | null>;
};

const Weather: React.FC<Props> = ({ getWeather }) => {
  const requestInterval = 5 * 60 * 60 * 1000;
  const [weather, setWeather] = useState<Wether | null>(null);
  const t = translations[UiStore.language];

  const getWindDirection = (data: string) =>
    data
      .split('')
      .map((item) => t[windDirections[item]])
      .join(' - ');

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
          <span>{`${weather?.current?.temp_c}`}&#160;&#8451;</span>
          <span> / </span>
          <span>{`${weather?.current?.temp_f}`}&#160;&#8457;</span>
          <span> </span>
        </div>
      </div>
      <div className={styles.wetherAdditionalBlock}>
        <div>
          <span>{`${t.wind}: `}</span>
          <span>{getWindDirection(weather?.current?.wind_dir)} </span>
        </div>
        <div>
          <span>{`${t.w_speed}: `}</span>
          <span>{`${weather?.current?.wind_kph} ${t['km/h']}`}</span>
        </div>
        <div>
          <span>{`${t.humidity}: `}</span>
          <span>{weather?.current?.humidity}%</span>
        </div>
        <div>
          <span>{`${t.pressure}: `}</span>
          {/* <span>{weather?.current?.pressure_mb} mbar</span> */}
          <span>{`${weather?.current?.pressure_mb} ${t.mbar}`}</span>
        </div>
      </div>
    </div>
  ) : null;
};
export default Weather;
