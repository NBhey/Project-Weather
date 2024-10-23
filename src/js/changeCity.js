import getWeatherCityData from "./getWeatherCityData"
import initMap from "./map";

let img = document.querySelector('img');
export default async function changeCity(value){
    const dataCity = await getWeatherCityData(value);
    document.querySelector('.city').textContent = `${dataCity.name}`;
    document.querySelector('.temperature').textContent = `${dataCity.main.temp} °C`;
    img = `http://openweathermap.org/img/wn/${dataCity.weather[0].icon}@2x.png`
    document.querySelector('#map').children[0].remove()
    await initMap(dataCity)
}
