var express = require('express');
var router = express.Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.json');
var bcrypt = require('bcrypt');
var validator = require('express-validator');

router.post('/', function(req, res, next) {
  req.checkBody('firstName', 'First Name is required').notEmpty();
  req.checkBody('lastName', 'Last Name is required').notEmpty();
  req.checkBody('gradeLevel', 'Grade Level is required').notEmpty();
  req.checkBody('username', 'Email is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    errors.forEach((errors => {
      console.log(errors.msg);
    }));
    res.sendStatus(400);
  } else {
    User.forge({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        grade_level: req.body.gradeLevel,
        email: req.body.username,
        password: req.body.password
      })
      .save()
      .then(function(user) {
        var myToken = jwt.sign({ user_id: user.get('user_id')}, config.secret);
        console.log('Data saved!');
        res.status(200).json({id_token: myToken, name: user.get('first_name')});
      }).catch(function(err) {
      res.sendStatus(500);
      console.log('Data did not save to Database!');
      console.error(err);
    });
    //console.log(req.body);
  }


});

module.exports = router;