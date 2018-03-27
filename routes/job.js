var db = require('./db_pool');

var Job = function () { };

Job.prototype.selectJobForCompany = function (cid,callback) {
    var sql = "select * from recruitment.company_ positon where cid";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }

        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false,results);
        });

    });
};


module.exports = Job

