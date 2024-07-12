class GeoAPI {
    constructor() {
        console.log("GeoAPI instance created");
    }

    fetchUserCoordinates(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => this.showPosition(position, callback),
                this.errorFunction
            );
        } else {
            console.log(`Failed to get user's location`);
        }
    }

    showPosition(position, callback) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        callback({ lat, long });
    }

    errorFunction() {
        alert("Geocoder failed");
    }
}

export default GeoAPI;
