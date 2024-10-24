import initMap from "../map";
import getWeatherCityData from "../getWeatherCityData.js";
import getIp from "../ip.js";


export const homeRout = async (el) => {
    // let element = document.querySelector('.city').textContent
    // console.log(element)
    el.innerHTML = `<div id='map'></div>`
    // await initMap(await getWeatherCityData(await getIp()))
}