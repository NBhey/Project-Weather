import initMap from "../map";
import getWeatherCityData from "../getWeatherCityData.js";
import getIp from "../ip.js";


export const homeRout = async (el) => {
    console.log('меня вызвали')
    el.innerHTML = `<div id='map'></div>`
    await initMap(await getWeatherCityData(await getIp()))
}