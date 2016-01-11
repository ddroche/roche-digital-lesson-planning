var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var config = require('../config.json');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
  User.forge({
      email: req.body.username,
      password_digest: req.body.password
    })
    .save()
    .then(function(user) {
      var myToken = jwt.sign({ user_id: user.get('user_id')}, config.secret);
      res.status(200).json({id_token: myToken});
    });
  console.log(req.body);

});

module.exports = router;