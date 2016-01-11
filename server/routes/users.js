var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var config = require('../config.json');

var jwtCheck = expressJWT({
  secret: config.secret
});
router.use('/', jwtCheck)

/* GET users listing. */
router.get('/', function(req, res, next) {
  var myToken = jwt.sign({ username: req.body.username}, config.secret);
  res.set('Authorization', 'Bearer ' + myToken);
  res.send({id_token: myToken});
});

router.post('/', function(req, res, next) {
  User.forge({
    email: req.body.username,
    password_digest: req.body.password
  })
  .save()
  .then(function(user) {
    var myToken = jwt.sign({ username: req.body.username}, config.secret);
    res.set('Authorization', 'Bearer ' + myToken);
    res.status(200).json({id_token: myToken});
  });
  console.log(req.body);

});

module.exports = router;

// TODO: incorporate jwt...follow along with example server