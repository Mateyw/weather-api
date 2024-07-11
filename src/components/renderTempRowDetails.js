import Data from '/src/components/fetchData';

class TempRow {
    async render() {
        try {
            const dataInstance = new Data();
            const city = document.getElementById('search').value.trim(); // Trim input to remove whitespace
            const data = await dataInstance.fetchData(city);

            if (data) {
                const currentTime = data.location.localtime;
                const currentHour = parseInt(currentTime.slice(11, 13)); // Extract current hour as integer

                const hourArr = [];
                const hours = data.forecast.forecastday[0].hour;

                // Loop through the hours to find the current hour and the next hours
                for (let i = 0; i < hours.length; i++) {
                    const forecastHour = parseInt(hours[i].time.slice(11, 13)); // Extract hour from forecast data

                    if (forecastHour >= currentHour) {
                        hourArr.push(forecastHour);
                    }

                    // If we have collected 5 hours of data, break the loop
                    if (hourArr.length >= 5) {
                        break;
                    }
                }

                console.log(hourArr);

                return {

                    time1 : document.getElementById('1').textContent = hourArr[0],
                    time2 : document.getElementById('2').textContent = hourArr[1],
                    time3 : document.getElementById('3').textContent = hourArr[2],
                    time4 : document.getElementById('4').textContent = hourArr[3],
                    time5 : document.getElementById('5').textContent = hourArr[4]
                }


            } else {
                console.log('Failed to fetch data.');
            }
        } catch (error) {
            console.error('Error rendering temp row:', error);
        }
    }

}

export default TempRow;