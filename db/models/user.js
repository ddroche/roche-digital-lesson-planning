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
  initialize: function() {
    this.on('saving', this.hashPassword, this);
  },
  hashPassword: function(model, attrs, options) {
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(model.attributes.password, salt, function(err, hash) {
          if (err ) reject(err);
          model.set('password', hash);
          resolve(hash);
        });
      })
    });
  },
  hasTimestamps: true,
  lessons: function() {
    return this.belongsToMany('Lesson', 'users_lessons', 'user_id', 'lesson_id');
  },
});



module.exports = Bookshelf.model('User', User);