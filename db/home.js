var db = require('./db_pool')

var Home = function () {}

Home.prototype.selectJob = function (callback) {
    var sql = "SELECT * FROM recruitment.home_job;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });

    });

};

Home.prototype.selectCompany = function (callback) {
    var sql = "SELECT * FROM recruitment.home_company;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });
    });

};


module.exports = Home;