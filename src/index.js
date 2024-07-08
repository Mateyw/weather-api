
const city = document.getElementById('inputSearch').value;

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function fetch(){
    const response = await fetch(url)
}