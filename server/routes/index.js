var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var config = require('../config.json');

var jwtCheck = expressJWT({
  secret: config.secret
});
router.use('/', jwtCheck)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var myToken = jwt.sign({ username: req.body.username}, config.secret);
  res.set('Authorization', 'Bearer ' + myToken);
  res.send({id_token: myToken});
});

module.exports = router;
