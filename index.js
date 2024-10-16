import './src/style/style.css'
import router from './src/js/router.js'
// возвращает объект с данными пользователя
import  getIp from './src/js/ip.js' 
// возвращает 
import getWeatherCityData from './src/js/getWeatherCityData.js'

import showCityData from './src/js/showCityData.js'

import initMap from './src/js/map.js'

const test = await getWeatherCityData(await getIp())
console.log(test)
console.log(typeof test)
showCityData(test)
await initMap()