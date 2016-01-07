/**
 * LessonPlans Collection
 */
var LessonPlan = require('../lessonPlan');
var Bookshelf = require('../bookshelf');

var LessonPlans = Bookshelf.Collection.extend({
  model: LessonPlan
});

module.exports = LessonPlans;