$(() => {
    $('#newtripform').submit((event) => {
        event.preventDefault();
        const trip = getNewTripFromForm();
        console.log(trip);
        
        createTrip(trip)
        .then(result => {
            // console.log(result);
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

$(() => {
    $('#edittripform').submit((event) => {
        event.preventDefault();
        const trip = getEditTripFromForm();
        console.log(trip);
        editTrip(trip)
        .then(result => {
            // console.log(result);
            window.location = `dashboard`;
        }).catch(error => {
            console.error(error);
            showErrorMessage(error.responseJSON.message);
        });
        });
    });



    function editTrip(trip) {
        return $.post(`${AUTH_URL}/dashboard/${trip.id}?_method=PUT`, trip);
    }