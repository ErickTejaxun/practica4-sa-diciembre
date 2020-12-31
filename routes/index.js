var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Practica 4 SA Diciembre 2020 ' });
});

router.get('/info', function(req, res, next) {
  res.send("informacion");
});


router.get('/error', function(req, res, next) {
  res.send("error");
});

module.exports = router;
