import getWeatherCityData from "../getWeatherCityData.js";
import getIp from "../ip.js";

export const moreRout = async (el, changeEl) => {
  let data;
  if (changeEl) {
    data = await getWeatherCityData(changeEl.textContent);
  } else {
    data = await getWeatherCityData(await getIp());
  }
  el.innerHTML = `<ul class='more__list'>
    <li>Ощущается как: ${data.main.feels_like} °C</li>
    <li>Влажность: ${data.main.humidity}</li>
    <li>Максимальная температура: ${data.main.temp_max} °C</li>
    <li>Минимальная температура: ${data.main.temp_min} °C</li>
    <li>Характеристика атмосферы: ${data.weather[0].description}</li>
    <li>Ветер: ${data.wind.speed} м/с</li>
    </ul>`;
};
