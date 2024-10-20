import './src/style/style.css'
import router from './src/js/router.js'
// возвращает объект с данными пользователя
import  getIp from './src/js/ip.js' 
import getWeatherCityData from './src/js/getWeatherCityData.js'
import showCityData from './src/js/showCityData.js'
import initMap from './src/js/map.js'

export const test = await getWeatherCityData(await getIp())
// console.log(test)
// console.log(typeof test)
showCityData(test)
// await initMap(test)

document.querySelector('.btn').addEventListener("click", async (e) => {
    e.preventDefault();
    let value = document.querySelector('.input').value.trim().toLowerCase();
    
 showCityData(await getWeatherCityData(value));
      document.querySelector('.input').value = "";
  });