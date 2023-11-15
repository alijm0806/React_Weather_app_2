

const getFormattedWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${units}`
  const data = await fetch(URL).then((res) => res.json()).then((data) => data);

  console.log(data)
};

export { getFormattedWeatherData }
