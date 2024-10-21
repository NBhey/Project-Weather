let Map;
export default async function initMap(city) {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  if (!Map) {
    Map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById("map"),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [city.coord.lon, city.coord.lat],

          // Уровень масштабирования
          zoom: 10,
        },
      }
    );
    // Добавляем слой для отображения схематической карты
    Map.addChild(new YMapDefaultSchemeLayer());
  } else {
    Map.setLocation({ center: [city.coord.lon, city.coord.lat], zoom: 10 });
  }
}
