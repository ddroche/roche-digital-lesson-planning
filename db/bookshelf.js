/**
 * Connection pool for our Postgres DB via knex and bookshelf.
 *
 * @author ddrochedsp@gmail.com
 */
var connectionString = process.env.PG_CONNECTION_STRING ||
                       'postgres://localhost:5432/rdlp';

// The knex module is a function that takes a configuration object
var knex = require('knex')({
  client: 'pg',
  connection: connectionString,
  searchPath: 'knex, public'
});

var Bookshelf = require('bookshelf')(knex);
var securePassword = require('bookshelf-secure-password');

Bookshelf.plugin(securePassword);

module.exports = Bookshelf;