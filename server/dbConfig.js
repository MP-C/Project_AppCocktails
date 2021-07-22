require('dotenv').config();
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

// create the connection to database
const db = mysql.createPool({
  // createConnection({ ?!?!
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the nodeJS server PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  Promise: bluebird,
});

module.exports = db;
