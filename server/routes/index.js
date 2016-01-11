var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var config = require('../config.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
