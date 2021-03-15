import React, { useEffect, useState } from 'react';
import styles from './Widgets.module.css';

type Props = {
  getWeather: () => Promise<any>;
};

const Weather: React.FC<Props> = ({ getWeather }) => {
  const requestInterval = 5 * 60 * 60 * 1000;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then((response) => {
      console.log(response);
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
      weather
      <img
        src="//cdn.weatherapi.com/weather/64x64/night/116.png"
        alt="typescript - это какая-то ЖОПА..."
      />
      {/* <img
        src={weather?.current?.condition?.icon}
        alt="typescript - это какая-то ЖОПА..."
      /> */}
    </div>
  ) : null;
};
export default Weather;
