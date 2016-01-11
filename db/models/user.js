/**
 * User model
 */

var Bookshelf = require('../bookshelf');
var Lesson = require('./lesson');
var bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

var User = Bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'user_id',
  hasSecurePassword: true,
  hashPassword: function(model, attrs, options) {
    return new Promise(function(resolve, reject) {
      bcrypt.has(model.attributes.password_digest, SALT_WORK_FACTOR, function(err, hash) {
        if (err ) reject(err);
        model.set('password_digest', hash);
        resolve(hash);
      });
    });
  },
  hasTimestamps: true,
  lessons: function() {
    return this.belongsToMany(Lesson, 'users_lessons', 'user_id', 'lesson_id');
  },
});



module.exports = User;