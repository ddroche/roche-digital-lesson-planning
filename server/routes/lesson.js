var express = require('express');
var router = express.Router();
var Lesson = require('../../db/models/lesson');
var Lessons = require('../../db/collections/lessons');
var jwt = require('jsonwebtoken');
var config = require('../config.json');
var bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
  Lesson.forge({
      lesson_name: req.body.lessonName,
      lesson_unit: req.body.lessonUnit,
      lesson_number: req.body.lessonNumber,
      lesson_subject: req.body.lessonSubject,
      lesson_description: req.body.lessonDescription,
      materials_required: req.body.materialsRequired,
      user_id: req.user.user_id
    })
    .save()
    .then(function(lesson) {
      lesson.users().attach(req.user.user_id);
      console.log(req.user);
      console.log(req.body);
      console.log('Data saved!');
      res.sendStatus(200);
    }).catch(function(err) {
    console.log('Data did not save to Database!');
    console.error(err);
  });
  console.log(req.body);

});

router.get('/', function(req, res) {
  Lessons.forge()
         .query({where: {user_id: req.user.user_id}})
         .fetch()
         .then( function(lessons) {
           console.log(req.user.user_id);
           res.json(lessons);
         })
         .catch( (err) => {
            res.sendStatus(500);
            console.log(err);
  });
});

module.exports = router;