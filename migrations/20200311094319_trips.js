
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trips', table => {
        table.increments('id').primary();
        table.text('tripnumber').notNullable();
        table.text('barge1');
        table.text('barge2');
        table.text('tug1');
        table.text('tug2');
        table.text('tug3');
        table.decimal('airdraft', 15, 2);
        table.text('tripname');
        table.text('moblocation');
        table.text('loadlocation');
        table.text('unloadlocation');
        table.text('customer');
        table.text('customerfirstname');
        table.text('customerlastname');
        table.text('customerphone');
        table.text('customeremail');
        table.timestamps('created_at');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('trips');
};
