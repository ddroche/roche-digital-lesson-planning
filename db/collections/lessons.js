/**
 * Lessons Collection
 */
var Lesson = require('../models/lesson');
var Bookshelf = require('../bookshelf');

var Lessons = Bookshelf.Collection.extend({
  model: Lesson
});

module.exports = Lessons;