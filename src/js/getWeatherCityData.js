const API_KEY = "fd185eec875c277bc16bccdb3629b6af";
export default async function getWeatherCityData(city) {
  let latitude;
  let longitude;
  if (typeof city === "object") {
    latitude = city.latitude;
    longitude = city.longitude;
  } else {
    const responseCity = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    const parseResCity = await responseCity.json();
    latitude = parseResCity[0].lat;
    longitude = parseResCity[0].lon;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  // return [Math.round(data.main.temp), data.weather[0].icon, data.coord];
  return data;
}
