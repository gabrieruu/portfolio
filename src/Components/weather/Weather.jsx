import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { WEATHER_GET } from '../../api';
import WeatherResult from './WeatherResult';
import styles from './Weather.module.css';

const citys = [
  {
    name: 'Maceió',
    uf: 'AL',
    latitude: '-9.66583',
    longitude: '-35.73528',
  },
  {
    name: 'Macapá',
    uf: 'AP',
    latitude: '0.03889',
    longitude: '-51.06639',
  },
  {
    name: 'Manaus',
    uf: 'AM',
    latitude: '-3.10194',
    longitude: '-60.025',
  },
  {
    name: 'Salvador',
    uf: 'BA',
    latitude: '-12.97111',
    longitude: '-38.51083',
  },
  {
    name: 'Fortaleza',
    uf: 'CE',
    latitude: '-3.71722',
    longitude: '-38.54306',
  },
  {
    name: 'Brasília',
    uf: 'DF',
    latitude: '-15.77972',
    longitude: '-47.92972',
  },
  {
    name: 'Vitória',
    uf: 'ES',
    latitude: '-20.31944',
    longitude: '-40.33778',
  },
  {
    name: 'Goiânia',
    uf: 'GO',
    latitude: '-16.67861',
    longitude: '-49.25389',
  },
  {
    name: 'São Luís',
    uf: 'MA',
    latitude: '-2.52972',
    longitude: '-44.30278',
  },
  {
    name: 'Cuiabá',
    uf: 'MT',
    latitude: '-15.59611',
    longitude: '-56.09667',
  },
  {
    name: 'Campo Grande',
    uf: 'MS',
    latitude: '-20.44278',
    longitude: '-54.64639',
  },
  {
    name: 'Belo Horizonte',
    uf: 'MG',
    latitude: '-19.92083',
    longitude: '-43.93778',
  },
  {
    name: 'Belém',
    uf: 'PA',
    latitude: '-1.45583',
    longitude: '-48.50444',
  },
  {
    name: 'João Pessoa',
    uf: 'PB',
    latitude: '-7.115',
    longitude: '-34.86306',
  },
  {
    name: 'Curitiba',
    uf: 'PR',
    latitude: '-25.42778',
    longitude: '-49.27306',
  },
  {
    name: 'Recife',
    uf: 'PE',
    latitude: '-8.05389',
    longitude: '-34.88111',
  },
  {
    name: 'Teresina',
    uf: 'PI',
    latitude: '-5.08917',
    longitude: '-42.80194',
  },
  {
    name: 'Rio de Janeiro',
    uf: 'RJ',
    latitude: '-22.90642',
    longitude: '-43.18223',
  },
  {
    name: 'Natal',
    uf: 'RN',
    latitude: '-5.795',
    longitude: '-35.20944',
  },
  {
    name: 'Porto Alegre',
    uf: 'RS',
    latitude: '-30.03283',
    longitude: '-51.23019',
  },
  {
    name: 'Porto Velho',
    uf: 'RO',
    latitude: '-8.76194',
    longitude: '-63.90389',
  },
  {
    name: 'Boa Vista',
    uf: 'RR',
    latitude: '2.81972',
    longitude: '-60.67333',
  },
  {
    name: 'Florianópolis',
    uf: 'SC',
    latitude: '-27.59667',
    longitude: '-48.54917',
  },
  {
    name: 'São Paulo',
    uf: 'SP',
    latitude: '-23.5475',
    longitude: '-46.63611',
  },
  {
    name: 'Aracaju',
    uf: 'SE',
    latitude: '-10.91111',
    longitude: '-37.07167',
  },
  {
    name: 'Palmas',
    uf: 'TO',
    latitude: '-10.16745',
    longitude: '-48.32766',
  },
];

const Weather = () => {
  const { request, data, error, loading } = useFetch();
  const [select, setSelect] = React.useState('-30.03283,-51.23019');
  const [weatherData, setWeatherData] = React.useState(null);

  React.useEffect(() => {
    if (select !== '') {
      async function fetchWeather() {
        const { url, options } = WEATHER_GET(
          select.split(',')[0],
          select.split(',')[1],
        );
        const { response, json } = await request(url, options);
        setWeatherData(json);
        console.log(json);
      }
      fetchWeather();
    }
  }, [select, request]);

  if (citys)
    return (
      <section className={styles.container}>
        <form>
          <select
            value={select}
            onChange={({ target }) => setSelect(target.value)}
          >
            <option value="-30.03283,-51.23019">Porto Alegre, RS</option>
            {citys.map((city) => (
              <option
                value={[city.latitude, city.longitude]}
                key={city.name}
              >{`${city.name}, ${city.uf}`}</option>
            ))}
          </select>
        </form>
        <WeatherResult
          data={weatherData}
          loading={loading}
          error={error}
          select={select}
        />
      </section>
    );
  else return null;
};

export default Weather;
