import router from './src/js/router.js'
import style from './src/style/style.css'
import  getIp from './src/js/ip.js'
import getWeather from './src/js/getWeatherCityData.js'
const test = await getIp()
console.log(test)
console.log(typeof(getIp()))