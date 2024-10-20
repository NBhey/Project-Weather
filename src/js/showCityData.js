export default function showCityData(cityData){
    const element = document.createElement('div');
    element.innerHTML = `
    <p>${cityData.name}</p>
    <p>${Math.round(cityData.main.temp)} °C</p>
    <img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
    `;

    const parentElement = document.querySelector('.main__city');
    const inputElement = document.querySelector('.content__request');

    parentElement.insertBefore(element,inputElement)
}