import Data from './fetchData.js';

class Header {

    display() {
        const searchButton = document.getElementById('magnifier');

        searchButton.addEventListener('click', async () => {
            const cityInput = document.getElementById('search').value.trim(); // remove whitespaces with trim()
            
            if (!cityInput) {
                alert('Please insert a city name.');
                return;
            }

            const data = new Data();
            const weatherData = await data.fetchData(cityInput);

            if (!weatherData) {
                alert('Failed to fetch weather data. Please try again.');
                return;
            }

            const cityName = document.querySelector('.city');
            cityName.textContent = weatherData.location.name;
            const currentTemp = document.querySelector('.degree');
            currentTemp.textContent = Math.round(weatherData.current.temp_c) + '°C';
            const rightPanelIcon = document.getElementById('icon');
            rightPanelIcon.src = weatherData.current.condition.icon;
            const rightPanelDesc = document.querySelector('.desc');
            rightPanelDesc.textContent = weatherData.current.condition.text;
            const minTemp = document.querySelector('.lowest');
            const maxTemp = document.querySelector('.highest');

            if (weatherData.forecast.forecastday[0].day.mintemp_c < 0) {
                minTemp.textContent = 'L: -' + Math.round(weatherData.forecast.forecastday[0].day.mintemp_c) + '°C';
            } else {
                minTemp.textContent = 'L: ' + Math.round(weatherData.forecast.forecastday[0].day.mintemp_c) + '°C';
            }

            if (weatherData.forecast.forecastday[0].day.maxtemp_c < 0) {
                maxTemp.textContent = 'H: -' + Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c) + '°C';
            } else {
                maxTemp.textContent = 'H: ' + Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c) + '°C';
            }
        });
    }
}

export default Header;
