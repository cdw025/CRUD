exports.seed = (knex, Promise) => {
  return knex.raw('DELETE FROM trips; ALTER SEQUENCE trips_id_seq RESTART WITH 1')
      .then(() => {
        const trips = [{
          tripnumber: 'D1',
          barge1: '1barge1',
          barge2: '1barge2',
          tug1: '1tug1',
          tug2: '1tug2',
          tug3: '1tug3',
          airdraft: 1,
          tripname: 'd1',
          moblocation: 'mob1',
          loadlocation: 'load1',
          unloadlocation: 'unload1',
          customer: 'cust1',
          customerfirstname: 'custfname1',
          customerlastname: 'custlname1',
          customerphone: 'custphone1',
          customeremail: 'custemail1'
        }, {
          tripnumber: 'D2',
          barge1: '2barge1',
          barge2: '2barge2',
          tug1: '2tug1',
          tug2: '2tug2',
          tug3: '2tug3',
          airdraft: 2,
          tripname: 'd2',
          moblocation: 'mob2',
          loadlocation: 'load2',
          unloadlocation: 'unload2',
          customer: 'cust2',
          customerfirstname: 'custfname2',
          customerlastname: 'custlname2',
          customerphone: 'custphone2',
          customeremail: 'custemail2'
        }, {
          tripnumber: 'D3',
          barge1: '3barge1',
          barge2: '3barge2',
          tug1: '3tug1',
          tug2: '3tug2',
          tug3: '3tug3',
          airdraft: 3,
          tripname: 'd3',
          moblocation: 'mob3',
          loadlocation: 'load3',
          unloadlocation: 'unload3',
          customer: 'cust3',
          customerfirstname: 'custfname3',
          customerlastname: 'custlname3',
          customerphone: 'custphone3',
          customeremail: 'custemail3'
        }, {
          tripnumber: 'D4',
          barge1: '4barge1',
          barge2: '4barge2',
          tug1: '4tug1',
          tug2: '4tug2',
          tug3: '4tug3',
          airdraft: 4,
          tripname: 'd4',
          moblocation: 'mob4',
          loadlocation: 'load4',
          unloadlocation: 'unload4',
          customer: 'cust4',
          customerfirstname: 'custfname4',
          customerlastname: 'custlname4',
          customerphone: 'custphone4',
          customeremail: 'custemail4'
        }];

        return knex('trips').insert(trips);
      });
};
