const knex = require('./connection');

module.exports = {

  getTrips: function() {
    return knex('trips');
  },
  getOneByTripNumber: function(tripnumber) {
    return knex('trips').where('tripnumber', tripnumber).first();
  },
  getOneByTripId: function(id) {
    return knex('trips').where('id', id).first();
  },
  create: function(trip) {
    return knex('trips').insert(trip,'id').then(ids => {
      return ids[0];
    });
  },
  update: function(id, trip) {
    return knex('trips').where('id', id).update(trip, '*');
  }
}
