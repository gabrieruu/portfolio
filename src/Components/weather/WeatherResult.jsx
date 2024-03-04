import React from 'react';
import styles from './WeatherResult.module.css';
import Loading from '../helper/Loading';

const WeatherResult = ({ data, loading, error, select }) => {
  const [weatherIcon, setWeatherIcon] = React.useState(0);
  const date = new Date();
  const day = date.getDay();
  const weekDay = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  React.useEffect(() => {
    if (data) {
      function weatherIconChange() {
        const iconCode = data.daily.weather_code[0];
        switch (iconCode) {
          case 0:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg',
            );
            break;
          case 1:
          case 2:
          case 3:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/partly-cloudy-day.svg',
            );
            break;
          case 45:
          case 48:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/fog-day.svg',
            );
            break;
          case 51:
          case 53:
          case 55:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/drizzle.svg',
            );
            break;
          case 56:
          case 57:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/hail.svg',
            );
            break;
          case 61:
          case 63:
          case 65:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/rain.svg',
            );
            break;
          case 66:
          case 67:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/sleet.svg',
            );
            break;
          case 77:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/snow.svg',
            );
            break;
          case 80:
          case 81:
          case 82:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/rain.svg',
            );
            break;
          case 71:
          case 73:
          case 75:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/snow.svg',
            );
            break;
          case 85:
          case 86:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/snow.svg',
            );
            break;
          case 95:
          case 96:
          case 99:
            setWeatherIcon(
              'https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/thunderstorms-rain.svg',
            );
            break;
          default:
            console.log('afeijaefij');
            break;
        }
      }
      weatherIconChange();
    }
  }, [data, select]);
  if (loading) return <Loading style={{ margin: ' 30px auto' }} />;
  if (data)
    return (
      <div className={`${styles.container} animeLeft`}>
        <div>
          <p>{weekDay[day - 1]}</p>
        </div>
        {weatherIcon && <img style={{ maxWidth: '100px' }} src={weatherIcon} />}
        <div>
          <div>
            <p className={styles.max}>
              {Math.round(data.daily.temperature_2m_max)}°C ↑
            </p>
          </div>
          <div>
            <p className={styles.min}>
              {Math.round(data.daily.temperature_2m_min)}°C ↓
            </p>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default WeatherResult;
