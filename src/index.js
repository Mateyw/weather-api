import '/src/style.css';
import TempRow from './components/renderTempRowDetails.js';
import Header from './components/header.js';
import ReverseGeocodeApi from './components/reverseGeocodeApi.js';

document.addEventListener('DOMContentLoaded', async () => {
    const header = new Header();
    header.display();

    const reverseGeocodeAPI = new ReverseGeocodeApi();
    await reverseGeocodeAPI.convertCoordsToCityName();

    // i would like to implement a geocode api which gets the uses location on dom load and display all the data to his city before even searching for any city.
    // tempRow.render();

    const searchButton = document.getElementById('magnifier');
    searchButton.addEventListener('click', async () => {
        const tempRow = new TempRow();
        await tempRow.render();
    });

   

});