import '/src/style.css';
import TempRow from './components/renderTempRowDetails.js';
import Header from './components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    const header = new Header();
    header.display();


    const tempRow = new TempRow();
    tempRow.render();

    const searchButton = document.getElementById('magnifier');
    searchButton.addEventListener('click', async () => {
        await tempRow.render();
    });

});