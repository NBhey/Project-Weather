import { homeRout } from "./routes/home.route.js";
import { moreRout } from "./routes/more.route.js";

const routes = {
  "#/": "home",
  "#/map": "map",
};

const components = {
  home: moreRout,
  map: homeRout,
};

async function router(url) {
  const route = routes[url] || "home";
 await components[route](document.getElementById("root"), document.querySelector('.city'));
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
  });
});

router(window.location.hash);
