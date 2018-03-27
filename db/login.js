var db = require('./db_pool');

var Login = function () {};


// ------------------------------------------用户注册/登陆---------------------------------------------------



Login.prototype.selectAccount = function (account,callback) {
    var sql = "SELECT * FROM recruitment.userlogin WHERE account =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [account], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });

    });

};

Login.prototype.selectId = function (id,callback) {
    var sql = "SELECT * FROM recruitment.userlogin WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            // console.log(results)
            connection.release();
            callback(false, results);
        });

    });
};


Login.prototype.userReg = function (id,name,account,password,callback) {
    var sql = "insert into recruitment.userlogin (id,name,account,password) values (?,?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,name,account,password], function(err, results) {
            if (err) {
                callback('false');
            } else {
                connection.release();
                callback('true');
            }
        });

    });
};


// ------------------------------------------公司注册/登陆---------------------------------------------------


Login.prototype.updateAccount = function (account,cid,callback) {
    var sql = "update recruitment.company_login set account=? where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [account,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });
    });
};


Login.prototype.updatePassword = function (password,cid,callback) {
    var sql = "update recruitment.company_login set password=? where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [password,cid], function(err, results) {
            if (err) {
                callback('false');
            }

            connection.release();
            callback('true');

        });
    });
};



Login.prototype.selectCompanyAccount = function (account,callback) {
    var sql = "SELECT * FROM recruitment.company_login WHERE account= ? ;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [account], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });

    });
};


Login.prototype.selectCname = function (cname,cid,callback) {
    var sql = "SELECT * FROM recruitment.company_login WHERE cname =? and cid!=? ";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cname,cid], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });
    });
};


Login.prototype.selectCid = function (cid,callback) {
    var sql = "SELECT * FROM recruitment.company_login WHERE cid =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });
    });
};


Login.prototype.companyReg = function (obj,callback) {
    var sql = "insert into recruitment.company_login (cid,cname,account,password) values (?,?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [obj.cid,obj.cname,obj.account,obj.password], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};



module.exports = Login;