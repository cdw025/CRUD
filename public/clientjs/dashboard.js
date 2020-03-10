$(() => {
    $('#newtripform').submit((event) => {
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

jQuery.each( [ "put", "delete" ], function( i, method ) {
    jQuery[ method ] = function( url, data, callback, type ) {
        if ( jQuery.isFunction( data ) ) {
        type = type || callback;
        callback = data;
        data = undefined;
        }
    
        return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
        });
    };
    });

function createTrip(trip) {
    return $.post(`${AUTH_URL}/newtrip`, trip);
}

$(() => {
    $('#edittripform').submit((event) => {
        event.preventDefault();
        const trip = getTripFromForm();
        const tripID = trip.id;
        console.log(tripID);
        editTrip(trip)
        .then(result => {
            window.location = `dashboard`;
        }).catch(error => {
            console.error(error);
            showErrorMessage(error.responseJSON.message);
        });
        });
    });

    function editTrip(trip) {
        return $.get(`${AUTH_URL}/edittrip`, trip);
    }
