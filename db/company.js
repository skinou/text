var db = require('./db_pool');

var Company = function () {};


// -------------------------------公司信息------------------------------------

Company.prototype.insertCompanyInfo = function (obj,field,callback) {
    var sql = "insert into recruitment.company_info (cid,cname,city,field,fiance,address,sentence,cimg) values (?,?,?,?,?,?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }

        // make the query
        connection.query(sql, [obj.cid,obj.cname,obj.city,field,obj.fiance,obj.address,obj.sentence,obj.cimg], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};


Company.prototype.selectCompanyInfo = function (cid,callback) {
    var sql = "SELECT * FROM recruitment.company_info WHERE cid =?";

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
            callback(false, results);

        });

    });
};



Company.prototype.updateCompanyImg = function (cimg,cid,callback) {
    var sql = "UPDATE recruitment.company_info SET cimg=? WHERE cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cimg,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};


Company.prototype.updateCompanyInfo = function (obj,cid,callback) {
    var sql = "UPDATE recruitment.company_info SET cname=?, city=?, field=?,fiance=?,address=?,sentence=? WHERE cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [obj.cname,obj.city,obj.field,obj.fiance,obj.address,obj.sentence,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};


Company.prototype.updateName = function (cname,cid,callback) {
    var sql = "UPDATE recruitment.company_login SET cname=? WHERE cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cname,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};



// ----------------------------------------公司产品-----------------------------------------------


Company.prototype.selectCompanyProduct = function (cid,callback) {
    var sql = "SELECT * FROM recruitment.company_product WHERE cid = ?;";

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
            callback(false, results);

        });

    });
};


Company.prototype.insertCompanyProduct = function (cid,pimg,pname,desc,callback) {
    var sql = "insert into recruitment.company_product (pkey,cid,pimg,pname,des) values (null,?,?,?,?);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid,pimg,pname,desc], function(err, results) {
            if (err) {
                console.log(err);
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};


Company.prototype.deleteCompanyProduct = function (pkey,callback) {
    var sql = "delete from recruitment.company_product where pkey=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [pkey], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};



// ----------------------------------------公司介绍-----------------------------------------------


Company.prototype.inertCompanyIntro = function (cid,callback) {
    var sql = "insert into recruitment.company_intro (cid,intro) values (?,null);";

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
            callback('true');
        });

    });
};

Company.prototype.updateCompanyIntro = function (intro,cid,callback) {
    var sql = "update recruitment.company_intro set intro = ? where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        // make the query
        connection.query(sql, [intro,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};


Company.prototype.selectCompanyIntro = function (cid,callback) {
    var sql = "select * from recruitment.company_intro where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};




// ----------------------------------------公司标签-----------------------------------------------



Company.prototype.inertCompanyTags = function (cid,callback) {
    var sql = "insert into recruitment.company_tags (cid,tags) values (?,null);";

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
            callback('true');

        });

    });
};

Company.prototype.updateCompanyTags = function (tags,cid,callback) {
    var sql = "update recruitment.company_tags set tags = ? where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        // make the query
        connection.query(sql, [tags,cid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};


Company.prototype.selectCompanyTags = function (cid,callback) {
    var sql = "select * from recruitment.company_tags where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};



// ----------------------------------------管理团队-----------------------------------------------



Company.prototype.inertCompanyManager = function (cid,mname,mposition,mimg,callback) {
    var sql = "insert into recruitment.company_manager (mkey,cid,mname,mposition,mimg) values (null,?,?,?,?)";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid,mname,mposition,mimg], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback('true');
        });

    });
};

Company.prototype.deleteCompanyManager = function (mkey,callback) {
    var sql = "delete from recruitment.company_manager where mkey=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(err);
            return;
        }
        // make the query
        connection.query(sql, [mkey], function(err, results) {
            if (err) {
                callback('false');
            }

            connection.release();
            callback('true');
        });

    });
};


Company.prototype.selectCompanyManager = function (cid,callback) {
    var sql = "select * from recruitment.company_manager where cid=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [cid], function(err, results) {
            if (err) {
                callback(err);
            }
            connection.release();
            callback(false,results);
        });

    });
};







module.exports = Company;