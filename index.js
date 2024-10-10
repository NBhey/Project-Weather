const routes = {
    '#/': 'home',
    '#/about': 'about',
    '#/contact': 'contact'
  };
  
  const components = {
    home: () => '<h1>Welcome to the homepage!</h1> <input>',
    about: () => '<h1>About us</h1>',
    contact: () => '<h1>Contact us</h1>'
  };
  
  function router(url) {
    console.log(url);
    const route = routes[url] || 'home';
    console.log(route);
    const content = components[route]();
    // console.log(content)
    document.getElementById('root').innerHTML = content;
  }
  
  window.addEventListener('popstate', () => {
    router(window.location.pathname);
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
  
  router(window.location.pathname);