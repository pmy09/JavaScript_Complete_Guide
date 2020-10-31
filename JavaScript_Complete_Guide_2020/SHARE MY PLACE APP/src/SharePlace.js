class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');
  
        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }
  
    locateUserHandler() {
        if (!navigator.geolocation) {
            alert(
            'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
            );
            return;
        }
        navigator.geolocation.getCurrentPosition(
            successResult => {
                console.log(successResult);
                const coordinates = {
                    lat: successResult.coords.latitude + Math.random() * 50, // Math.random not required
                    lng: successResult.coords.longitude + Math.random() * 50, // used to hide Max's location
                };
                console.log(coordinates);
            },
            error => {
                alert(
                    'Could not locate you unfortunately. Please enter an address manually!'
                );
            }
        );
    }
  
    findAddressHandler() {}
}
  
const placeFinder = new PlaceFinder();