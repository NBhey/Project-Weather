import { homeRout } from "./routes/home.route.js";
import showCityData from "./showCityData.js";

import initMap from "./map";
import getWeatherCityData from "./getWeatherCityData.js";
import getIp from "./ip.js";
const routes = {
  "#/": "home",
  "#/more": "more",
};

const components = {
  home: homeRout,
  more: (el) => (el.innerHTML = "<h1>Contact us</h1>"),
};

async function router(url) {
  const route = routes[url] || "home";
 await components[route](document.getElementById("root"));
}

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

// Обработка кликов на ссылки
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click",async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const url = link.getAttribute("href"); // Получаем URL из ссылки
    history.pushState({}, "", url); // Добавляем URL в историю браузера
    router(url);
    await initMap(await getWeatherCityData(await getIp()))
  });
});

router(window.location.hash);
