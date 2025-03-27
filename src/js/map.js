let Map;
import * as ymaps3 from 'ymaps3';
export default async function initMap(city) {
 
const {YMap, YMapDefaultSchemeLayer} = ymaps3;

Map = new YMap(
  document.getElementById('map'),
  {
      location: {
          center: [city.coord.lon, city.coord.lat],
          zoom: 10
      }
  }
);
Map.addChild(new YMapDefaultSchemeLayer());
}