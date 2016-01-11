var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var config = require('../config.json');
var bcrypt = require('bcrypt');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({id_token: myToken});
});



module.exports = router;

// TODO: incorporate jwt...follow along with example server