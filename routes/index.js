var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Software avanzado' });
});

router.get('/info', function(req, res, next) {
  res.send("informacion");
});


router.get('/error', function(req, res, next) {
  res.send("error");
});

module.exports = router;
