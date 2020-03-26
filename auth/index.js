const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const User = require('../db/user');
const Trip = require('../db/trip');

// Route paths are prepended with /auth

router.get('/', (req, res) => {
    res.json({
        message: 'locked'
    });
});

function validUser(user) {
    const validEmail = typeof user.email == 'string' &&
                        user.email.trim() !='';

    const validPassword = typeof user.password == 'string' &&
                        user.password.trim() !='' &&
                        user.password.trim().length >= 6;

    return validEmail && validPassword;
}


router.post('/signup', (req, res, next) => {
    if(validUser(req.body)) {
        User
        .getOneByEmail(req.body.email)
        .then(user => {
            console.log('user', user);
            //If user not found
            if(!user) {
                //this is a unique email
                // hash password
                bcrypt.hash(req.body.password, 10)
                .then((hash) => {
                    const user = {
                        email: req.body.email,
                        password: hash,
                        created_at: new Date()
                    };

                    User
                    .create(user)
                    .then(id => {
                // redirect
                res.json({
                    id,
                    message: 'all good'
                });
                    });
                // insert user into db

                });
            } else {
                //email in use
                next(new Error('email in use'));
            }
        });
    } else {
        next(new Error('Invalid user'));
    }
});

router.post('/login', (req, res, next) => {
    if(validUser(req.body)) {
        //check to see if in DB
        User
        .getOneByEmail(req.body.email)
        .then(user => {
            console.log('user', user);
            if(user) {
                //compare password with hashed password
                bcrypt.compare(req.body.password, user.password)
                .then((result) => {
                    // if the passwords matched
                    if(result) {
                        // setting the 'set-cookie' header
                        const isSecure = req.app.get('env') === 'development';
                        res.cookie('user_id', user.id, {
                            httpOnly: true,
                            signed: true,
                            sameSite: 'strict'
                        });
                        res.json({
                            id: user.id,
                            message: 'Logged In!'
                        });
                    } else {
                        next(new Error('Invalid password'))
                    }

                });

            } else {
                next(new Error('Invalid login'));
            }
        });
    } else {
        next(new Error('Invalid Login'));
    }
});


function validTrip(trip) {
    const validTripNumber = typeof trip.tripnumber == 'string' &&
                        trip.tripnumber.trim() !='';

    return validTripNumber;
}

router.post('/newtrip', (req, res, next) => {
    if(validTrip(req.body)) {
        Trip
        .getOneByTripNumber(req.body.tripnumber)
        .then(trip => {
            console.log('trip', trip);
            //If trip not found
            if(!trip) {
                //this is a unique trip
                    const trip = {
                        tripnumber: req.body.tripnumber,
                        barge1: req.body.barge1,
                        barge2: req.body.barge2,
                        tug1: req.body.tug1,
                        tug2: req.body.tug2,
                        tug3: req.body.tug3,
                        airdraft: req.body.airdraft,
                        tripname: req.body.tripname,
                        moblocation: req.body.moblocation,
                        loadlocation: req.body.loadlocation,
                        unloadlocation: req.body.unloadlocation,
                        customer: req.body.customer,
                        customerfirstname: req.body.customerfirstname,
                        customerlastname: req.body.customerlastname,
                        customerphone: req.body.customerphone,
                        customeremail: req.body.customeremail
                    };

                    Trip
                    .create(trip)
                    .then(id => {
                // redirect
                res.json({
                    id,
                    message: 'trip created'
                });
                    });
                } else {
                    // existing trip
                    console.log('trip already exists');
                }
            });
        }
    });

router.put('/dashboard/:id', (req, res, next) => {
    if(validTrip(req.body)) {
        Trip
        .update(req.params.id, req.body).then(trip => {
            res.json(trip);
        });
        } else {
            next(new Error('invalid trip'));
        }
    });

router.delete('/dashboard/:id', (req, res, next) => {
        if (!isNaN(req.params.id)) {
            Trip
            .delete(req.params.id).then(() => {
                res.send('deleted');
            });
        } else {
            res.send('bad id');
        }
    });

router.get('/dashboard/:id', (req, res) => {
    if (!isNaN(req.params.id)) {
        Trip.getOneByTripId(req.params.id).then(trip => {
        if (trip) {
            res.json(trip);
        } else {
            res.status(404);
            res.send('trip not found');
        }
        });
    } else {
        res.status(500);
        res.send('invalid ID');
    }
    });
    


module.exports = router;