/**
 * Lesson model
 */

var Bookshelf = require('../bookshelf');
var User = require('./user');
var LessonPlan = require('./lessonPlan');

var Lesson = Bookshelf.Model.extend({
  tableName: 'lessons',
  idAttribute: 'lesson_id',
  hasTimestamps: true,
  users: function() {
    return this.belongsToMany(User, 'users-lessons', 'lesson_id', 'user_id');
  },
  lessonPlans: function() {
    return this.hasMany(LessonPlan, 'plan_id');
  }
});

module.exports = Lesson;