import { homeRout } from "./routes/home.route.js";
import showCityData from "./showCityData.js";
const routes = {
  "#/": "home",
  "#/more": "more",
};

const components = {
  home: homeRout,
  more: (el) => (el.innerHTML = "<h1>Contact us</h1>"),
};

function router(url) {
  const route = routes[url] || "home";
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
    history.pushState({}, "", url); // Добавляем URL в историю браузера
    router(url);
  });
});

router(window.location.hash);
