$(() => {
    $('#newtripform').submit((event) => {
        event.preventDefault();
        const trip = getNewTripFromForm();
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


$(document).delegate('.edittripform', 'submit', function(event) {
    event.preventDefault();
    var form = $(this);
    const trip = getEditTripFromForm(form);
    console.log(trip);
    editTrip(trip)
    .then(result => {
        console.log(result);
        window.location = `dashboard`;
    }).catch(error => {
        console.error(error);
        showErrorMessage(error.responseJSON.message);
    });
});
    function editTrip(trip) {
        return $.put(`${AUTH_URL}/dashboard/${trip.id}`, trip);
    }