import initMap from "./map";
const routes = {
    '#/': 'home',
    '#/about': 'about',
    '#/contact': 'contact',
    // '#/map': 'map'
  };
  
  const components = {
    home: () => '<h1>Welcome to the homepage!</h1>',
    about: () => '<h1>About us</h1>',
    contact: () => '<h1>Contact us</h1>',
    // map: () => initMap()
  };
  
  function router(url) {
    // console.log({url});
    const route = routes[url] || 'home';
    // console.log({route});
    const content = components[route]();
    // console.log(content)
    document.getElementById('root').innerHTML = content;
  }
  
  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
  
  // Обработка кликов на ссылки
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      const url = link.getAttribute('href'); // Получаем URL из ссылки
    //   console.log(url)
      history.pushState({}, '', url); // Добавляем URL в историю браузера
      router(url);
    });
  });
  
  router(window.location.hash);