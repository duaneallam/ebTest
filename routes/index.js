var express = require('express');
var util = require('util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', req: req.headers['x-forwarded-for'] });
});

module.exports = router;
