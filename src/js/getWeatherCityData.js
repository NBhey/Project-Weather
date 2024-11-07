const API_KEY = "fd185eec875c277bc16bccdb3629b6af";
export default async function getWeatherCityData(city) {
  let latitude;
  let longitude;
  if (typeof city === "object") {
    latitude = city.latitude;
    longitude = city.longitude;
  } else {
    const responseCity = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
    );
    const parseResCity = await responseCity.json();
    console.log(parseResCity)
    latitude = parseResCity[0].lat;
    longitude = parseResCity[0].lon;
  }

  const url = `https://ru.api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=${API_KEY}&units=metric`;
  // const url = `https://ru.api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
