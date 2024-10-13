import router from './src/js/router.js'
// возвращает объект с данными пользователя
import  getIp from './src/js/ip.js' 
// возвращает 
import getWeather from './src/js/getWeatherCityData.js'

import style from './src/style/style.css'


const test = await getWeather(await getIp())
console.log(test)
