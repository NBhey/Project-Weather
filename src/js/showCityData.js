export default function showCityData(cityData){
    const element = document.createElement('div');
    element.classList.add('content__data-city')
    element.innerHTML = `
    <h2 class="city">${cityData.name}</h2>
    <p class="temperature">${Math.round(cityData.main.temp)} °C</p>
    <img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">
    `;

    const parentElement = document.querySelector('.main__city');
    const inputElement = document.querySelector('.content__request');

    parentElement.insertBefore(element,inputElement)

}