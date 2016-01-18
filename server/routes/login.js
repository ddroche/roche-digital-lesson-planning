var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.json');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
  if (req.body.username == null|| req.body.password == null){
    throw 'Please include username and password';
  }
  User.where('email', req.body.username)
    .fetch()
    .then(function(user) {
      //hash and compare
      //if pw matches, sign
      // if doesn't match, send 401
      bcrypt.compare(req.body.password, user.get('password'), function(err, response) {
        if (response) {
          var myToken = jwt.sign({ user_id: user.get('user_id')}, config.secret);
          console.log(user);
          res.status(200).json({id_token: myToken, name: user.get('first_name')});
        } else {
          res.sendStatus(401);
        }
      })}).catch(function(err) {
        console.log('User not logged in');
        console.error(err);
      });

});



module.exports = router;