import initMap from "./map";
import getWeatherCityData from "./getWeatherCityData.js";
import getIp from "./ip.js";
import showCityData from "./showCityData.js";
const routes = {
  "#/": "home",
  "#/about": "about",
  "#/contact": "contact",
};

const components = {
  home: (el) =>
    (el.innerHTML = `<h1>Welcome to the homepage!</h1>`),
  about: async (el) => (
    (el.innerHTML = `<h1>About us</h1>
    <div id='map' style="width: 600px; height: 400px"></div>
    `),
    await initMap(await getWeatherCityData(await getIp()))
  ),
  contact: (el) => (el.innerHTML = "<h1>Contact us</h1>"),
};

function router(url) {
  const route = routes[url] || "home";
  // console.log(components[route])
  components[route](document.getElementById("root"));
}

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

// Обработка кликов на ссылки
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const url = link.getAttribute("href"); // Получаем URL из ссылки
    //   console.log(url)
    history.pushState({}, "", url); // Добавляем URL в историю браузера
    router(url);
  });
});

router(window.location.hash);
