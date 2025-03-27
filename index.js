import "./src/style/style.css";
import router from "./src/js/router";
import getIp from "./src/js/ip.js";
import getWeatherCityData from "./src/js/getWeatherCityData.js";
import showCityData from "./src/js/showCityData.js";
import changeCity from "./src/js/changeCity.js";
import { saveList, readList } from "./src/js/localeStorage";
import { renderCityList } from "./src/js/renderCityList.js";

const cityList = await readList();
renderCityList(document.querySelector('.city-list'),cityList)
await showCityData(await getWeatherCityData(await getIp()));

document.querySelector(".btn").addEventListener("click", async (e) => {
  e.preventDefault();

  let value = document.querySelector(".input").value.trim().toLowerCase();
  changeCity(value);

  document.querySelector(".input").value = "";

  cityList.push(value)
  saveList(cityList)
  renderCityList(document.querySelector('.city-list'),cityList)
});
