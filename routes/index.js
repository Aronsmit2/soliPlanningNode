var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Soli planning' });
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Soli planning' });
});

/* GET sign-up page */
router.get('/sign-up', function(req, res, next) {
  res.render('sign-up', { title: 'Soli planning' });
});

module.exports = router;
