import getWeatherCityData from "./getWeatherCityData";
import initMap from "./map";

let img = document.querySelector("img");
export default async function changeCity(value) {
  const dataCity = await getWeatherCityData(value);
  document.querySelector(".city").textContent = `${value}`;
  document.querySelector(
    ".temperature"
  ).textContent = `${dataCity.main.temp} °C`;
  img = `http://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`;
  if (document.querySelector("#map")) {
    document.querySelector("#map").children[0].remove();
    await initMap(dataCity);
  } else if (document.querySelector(".more__list")) {
    document.querySelector(".more__list").innerHTML = `
         <li>Ощущается как: ${dataCity.main.feels_like} °C</li>
        <li>Влажность: ${dataCity.main.humidity}</li>
        <li>Максимальная температура: ${dataCity.main.temp_max} °C</li>
        <li>Минимальная температура: ${dataCity.main.temp_min} °C</li>
        <li>Характеристика атмосферы: ${dataCity.weather[0].description}</li>
        <li>Ветер: ${dataCity.wind.speed} м/с</li>
        `;
  }
}
