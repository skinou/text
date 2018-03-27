var mysql = require('mysql');
var db_config = require('./db_config');

// var pool = mysql.createPool(db_config.mysql_config);
var pool = mysql.createPool(db_config.mysql_config);

exports.pool = pool;