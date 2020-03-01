const knex = require('./connection');

module.exports = {

  getTrips: function() {
    return knex('trips');
  }
}
