var express = require('express');
var router = express.Router();
var authMiddleware = require('../auth/middleware');
const Trip = require('../db/trip');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/dashboard', authMiddleware.ensureLoggedIn, function(req, res) {
  Trip.getTrips().then(trips => {
    console.log(trips);
    trippy = JSON.stringify(trips);
    trippy = JSON.parse(trippy)[0].tripnumber;
    console.log(trippy);
    res.render('dashboard', { title: 'Express', tripnumber: trippy });
  });
});

router.get('/logout', function(req, res, next) {
  res.clearCookie('user_id');
  res.redirect('/login');
});

module.exports = router;
