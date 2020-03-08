$(() => {
    $('form').submit((event) => {
        event.preventDefault();
        const trip = getTripFromForm();
        console.log(trip);
        
        createTrip(trip)
        .then(result => {
            console.log(result);
            window.location = `dashboard`;
        }).catch(error => {
            console.error(error);
            showErrorMessage(error.responseJSON.message);
        });
        });
    });

function createTrip(trip) {
    return $.post(`${AUTH_URL}/newtrip`, trip);
}