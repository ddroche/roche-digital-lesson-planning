/**
 * Lesson Plan model
 */

var Bookshelf = require('../bookshelf');
var Lesson = require('./lesson');

var LessonPlan = Bookshelf.Model.extend({
  tableName: 'lesson-plans',
  idAttribute: 'plan_id',
  hasTimestamps: true,
  lessons: function() {
    return this.belongsTo(Lesson, 'lesson_id');
  },
});

module.exports = LessonPlan;