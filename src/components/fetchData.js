class Data {
    constructor() {
        this.apiKey = '6b6563064e0040dfab1223919240707';
    }

    async fetchData(city) {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                return data; 
            } else {
                console.error('HTTP Error:', response.status);
                return null;
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            return null;
        }
    }
}

export default Data;