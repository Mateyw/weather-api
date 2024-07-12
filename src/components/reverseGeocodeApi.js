import GeoAPI from "./geolocationAPI";

class ReverseGeocodeApi {
    constructor() {
        this.apiKey = `6690eec6e59aa379065450nbs163659`;
    }

    async convertCoordsToCityName() {

        const geoAPI = new GeoAPI();

        geoAPI.fetchUserCoordinates(async (coords) => {
            const lat = coords.lat;
            const long = coords.long;
            const url = `https://geocode.maps.co/reverse?lat=${lat}&lon=${long}&api_key=${this.apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (response.ok) {
                    return data;
                } else {
                    console.error('Error:', data);
                }


            } catch (error) {
                console.log(error);
            }
        });

    }
}

export default ReverseGeocodeApi;