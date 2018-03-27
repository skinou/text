var db = require('./db_pool');

var User = function () {};


// ----------------------------个人信息------------------------------------

User.prototype.insertUserInfo = function (id,name,callback) {
    var sql = "insert into recruitment.user_info (id,name,img,sex,age,city,degree,major,school,phone,email) values (?,?,null,null,null,null,null,null,null,null,null);";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,name], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });
    });
};

User.prototype.updateName = function (name,id,callback) {
    var sql = "UPDATE recruitment.userlogin SET name=? WHERE id=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};

User.prototype.selectInfo = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_info WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.updateImg = function (img,id,callback) {
    var sql = "UPDATE recruitment.user_info SET img=? WHERE id=?;";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [img,id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};

User.prototype.updateUserInfo = function (name,sex,age,city,degree,major,school,phone,email,id,callback) {
    var sql = 'UPDATE recruitment.user_info SET name=?, sex=?, age=?,city=?,degree=?,major=?,school=?,phone=?,email=? WHERE id=?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,sex,age,city,degree,major,school,phone,email,id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};

// ----------------------------期望工作------------------------------------


User.prototype.insertUserExpect = function (id,callback) {
    var sql = 'insert into recruitment.user_expect (id,name,type,city,salary,statement) values (?,null,null,null,null,null);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};

User.prototype.updateUserExpect = function (name,type,city,salary,statement,id,callback) {
    var sql = 'UPDATE recruitment.user_expect SET name=?, type=?, city=?,salary=?,statement=? WHERE id=?;';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name,type,city,salary,statement,id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');
        });

    });
};

User.prototype.selectExpect = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_expect WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);

        });

    });
};

// ----------------------------教育------------------------------------

User.prototype.selectEducation = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_education WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.insertEducation = function (id,school,degree,major,start,end,callback) {
    var sql = 'insert into recruitment.user_education (id,keyid,school,degree,major,start,end) values (?,null,?,?,?,?,?);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,school,degree,major,start,end], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.deleteEducation = function (id,keyid,callback) {
    var sql = 'delete from recruitment.user_education where id=? and keyid=?;'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,keyid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};


// ----------------------------工作------------------------------------


User.prototype.selectWork = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_work WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.insertWork = function (id,company,position,start,end,statement,callback) {
    var sql = 'insert into recruitment.user_work (id,keyid,company,position,start,end,statement) values (?,null,?,?,?,?,?);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,company,position,start,end,statement], function(err, results) {
            if (err) {
                callback('false');
            }

            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.deleteWork = function (id,keyid,callback) {
    var sql = 'delete from recruitment.user_work where id=? and keyid=?;'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,keyid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

// ----------------------------项目------------------------------------


User.prototype.selectPro = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_project WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);

        });

    });
};

User.prototype.insertPro = function (id,project,start,end,statement,callback) {
    var sql = 'insert into recruitment.user_project (id,keyid,project,start,end,statement) values (?,null,?,?,?,?);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,project,start,end,statement], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);

        });

    });
};

User.prototype.deletePro = function (id,keyid,callback) {
    var sql = 'delete from recruitment.user_project where id=? and keyid=?;'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,keyid], function(err, results) {
            if (err) {
                callback('false');
            }

            connection.release();
            callback(false, results);

        });

    });
};


// ----------------------------自我描述------------------------------------


User.prototype.selectDes = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_describe WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);

        });

    });
};


User.prototype.insertDes = function (id,statement,callback) {
    var sql = 'insert into recruitment.user_describe (id,statement) values (?,null) ';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};


User.prototype.updateDes = function (id,statement,callback) {
    var sql = 'update recruitment.user_describe set statement = ? where id = ? ';

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [statement,id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};


// ----------------------------技能------------------------------------


User.prototype.selectSkill = function (id,callback) {
    var sql = "SELECT * FROM recruitment.user_skill WHERE id =?";

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback(false, results);
        });

    });
};

User.prototype.insertSkill = function (id,skill,sValue,callback) {
    var sql = 'insert into recruitment.user_skill (id,keyid,skill,sValue) values (?,null,?,?);'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,skill,sValue], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};

User.prototype.deleteSkill = function (id,keyid,callback) {
    var sql = 'delete from recruitment.user_skill where id=? and keyid=?;'

    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id,keyid], function(err, results) {
            if (err) {
                callback('false');
            }
            connection.release();
            callback('true');

        });

    });
};




module.exports = User;