import './src/style/style.css'
import router from './src/js/router.js'
import  getIp from './src/js/ip.js' 
import getWeatherCityData from './src/js/getWeatherCityData.js'
import showCityData from './src/js/showCityData.js'
import changeCity from './src/js/changeCity.js'
import initMap from './src/js/map.js'


let cityData;
cityData = await getWeatherCityData(await getIp())
await showCityData(cityData)
document.querySelector('.btn').addEventListener("click", async (e) => {
    e.preventDefault();
    let value = document.querySelector('.input').value.trim().toLowerCase();
    changeCity(value)
    document.querySelector('.input').value = "";
  });