/**
 * Users Collection
 */
var User = require('../user');
var Bookshelf = require('../bookshelf');

var Users = Bookshelf.Collection.extend({
  model: User
});

module.exports = Users;