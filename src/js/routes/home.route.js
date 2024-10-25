import initMap from "../map";
import getWeatherCityData from "../getWeatherCityData.js";
import getIp from "../ip.js";


export const homeRout = async (el, changeEl) => {
    el.innerHTML = `<div id='map'></div>`
    if (changeEl) {
        await initMap(await getWeatherCityData(changeEl.textContent))
    } else {
        await initMap(await getWeatherCityData(await getIp()))
    }
    
}