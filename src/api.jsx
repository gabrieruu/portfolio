export function WEATHER_GET(latitude, longitude) {
  return {
    url: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1`,
    options: {
      method: 'GET',
    },
  };
}
