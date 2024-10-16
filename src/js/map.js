import  getWeatherCityData  from "./getWeatherCityData";

let Map;

export default async function initMap(city) {
    console.log(city)

  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  if (!Map) {
    Map = new YMap(document.getElementById("map"), {
      location: {
        center: [city.coord.lon, city.coord.lat],
        zoom: 10,
      },
    });
    Map.addChild(new YMapDefaultSchemeLayer());
  } else {
    Map.setLocation({ center: [city.coord.lon, city.coord.lat], zoom: 10 });
  }
}