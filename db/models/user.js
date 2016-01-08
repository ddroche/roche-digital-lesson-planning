/**
 * User model
 */

var Bookshelf = require('../bookshelf');
var Lesson = require('./lesson');

var User = Bookshelf.Model.extend({
  tableName: 'user',
  idAttribute: 'user_id',
  hasSecurePassword: true,
  hasTimestamps: true,
  lessons: function() {
    return this.belongsToMany(Lesson, 'users_lessons', 'user_id', 'lesson_id');
  },
});

module.exports = User;