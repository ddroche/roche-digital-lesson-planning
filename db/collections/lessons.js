/**
 * Lessons Collection
 */
var Lesson = require('../lesson');
var Bookshelf = require('../bookshelf');

var Lessons = Bookshelf.Collection.extend({
  model: Lesson
});

module.exports = Lessons;