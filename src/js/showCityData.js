export default function showCityData(cityData){
    const element = document.querySelector('.content__city');
    element.innerHTML = `
    <p>${cityData.name}</p>
    <p>${Math.round(cityData.main.temp)} °C</p>
    <img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
    `
}