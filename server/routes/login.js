var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var config = require('../config.json');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
  User.where('email', req.body.username)
    .fetch()
    .then(function(user) {
      //hash and compare
      //if pw matches, sign
      // if doesn't match, send 403
      bcrypt.compare(req.body.password, user.get('password_digest'), function(err, response) {
        if (response) {
          var myToken = jwt.sign({ user_id: user.get('user_id')}, config.secret);
          res.status(200).json({id_token: myToken});
        } else {
          res.sendStatus(401);
        }
      })


      //var hash = bcrypt.hashSync(req.body.password);
      //
      //var pass = bcrypt.compareSync(user.get('password_digest'), hash);
      //if (pass) {
      //  var myToken = jwt.sign({ user_id: user.get('user_id')}, config.secret);
      //  res.status(200).json({id_token: myToken});
      //} else {
      //  res.sendStatus(403);
      //}
    })
})



module.exports = router;