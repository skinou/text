var express = require('express');
var router = express.Router();
var Company = require('../db/company');
var Login = require('../db/login');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// ------------------------------------公司信息----------------------------------------------

router.get('/getCompany', function(req, res, next) {
                                                                                  // 获取公司基本信息
    var company = new Company();
    // var cname = req.session.user.name;
    // console.log(cname);
    company.selectCompanyInfo( req.session.user.id,function(err,result){
        if(err){
            console.log(err)
        }
        // if( result[0].cimg !==null){
        //     var imgData = new Buffer( result[0].cimg).toString();
        //     console.log(result);
        //     result[0].cimg = imgData;
        // }
        console.log(result);
        res.send(result)
    });
});


router.post('/companyImg', function(req, res, next) {
                                                                                // 更新图片
    var cid = req.session.user.id;
    var img = req.body.img;
    var company = new Company();
    console.log(img);
    company.updateCompanyImg(img,cid,function(err,result){
        if(err){
            console.log(err)
        }
        res.send('true');
    });
});


router.post('/insertCompany', function(req, res, next) {
                                                                            // 插入账号信息，完成注册
    var company = new Company();
    var login = new Login();
    var company_login = req.body.company_login;
    var company_info = req.body.company_info;
    console.log(company_login);
    console.log('------------------------');
    var field = company_info.field.toString();
    // company_info.field = str;
    console.log(company_info);
    console.log(field);
    login.companyReg(company_login,function(err,result) {
        if (err) {
            console.log(err)
        }
        company.insertCompanyInfo(company_info,field,function(err,result){
            if(err){
                console.log(err)
            }

            company.inertCompanyIntro(company_login.cid,function(err,result){
                if(err){
                    console.log(err)
                }

                res.send('注册成功');
            });
            // res.send('注册成功');
        });

    });

});

router.post('/updateCompany', function(req, res, next) {
                                                                                // 更新公司信息
    var company = new Company();
    var login = new Login();

    var data = req.body.data;

    console.log(data);

    login.selectCname(data.cname,req.session.user.id,function(err,result) {
        if (err) {
            console.log(err)
        }
        if (result.length !== 0) {
            res.send('公司名已被注册');
        }
        else {
            company.updateCompanyInfo(data,req.session.user.id,function(err,result){
                if(err){
                    console.log(err)
                }
                if(data.cname !== req.session.user.name){
                    company.updateName(data.cname,req.session.user.id,function (err,result) {
                        if(err){
                            console.log(err)
                        }
                    });
                }
                res.send('true');
            });
        }
    });
});


// ------------------------------------公司产品----------------------------------------------


router.get('/getCompanyProduct', function(req, res, next) {
                                                                                    //获取公司产品
    var company = new Company();

    company.selectCompanyProduct(req.session.user.id,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});


router.post('/insertCompanyProduct', function(req, res, next) {
                                                                                //插入公司产品信息
    var company = new Company();

    var cid = req.session.user.id;
    var obj = req.body.obj;
    console.log(obj);

    company.insertCompanyProduct(cid,obj.pimg,obj.pname,obj.desc,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send('true');
    });

});


router.post('/deleteCompanyProduct', function(req, res, next) {
                                                                                //删除公司产品信息
    var company = new Company();
    var pkey = req.body.pkey;

    company.deleteCompanyProduct(pkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});


// ------------------------------------公司介绍----------------------------------------------

router.get('/selectCompanyIntro', function(req, res, next) {
                                                                                    //插入公司介绍
    var cid = req.session.user.id;
    var company = new Company();

    company.selectCompanyIntro(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log('-------------------------21313213-------------------------------');
        console.log(result);
        console.log('-------------------------21313213-------------------------------');
        res.send(result);
    });

});

// router.post('/insertCompanyIntro', function(req, res, next) {
//     //插入公司介绍
//     var company = new Company();
//     var cid = req.session.user.id;
//
//     company.deleteCompanyProduct(cid,function(err,result) {
//         if (err) {
//             console.log(err)
//         }
//         res.send(result);
//     });
//
// });


router.post('/updateCompanyIntro', function(req, res, next) {
                                                                                    //更新公司介绍
    var cid = req.session.user.id;
    var intro = req.body.intro;
    console.log(intro);

    var company = new Company();

    company.updateCompanyIntro(intro,cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});


// ------------------------------------公司标签----------------------------------------------



router.get('/selectCompanyTags', function(req, res, next) {
                                                                     //提取公司标签
    var cid = req.session.user.id;
    var company = new Company();

    company.selectCompanyTags(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});


router.post('/insertCompanyTags', function(req, res, next) {
                                                                    //插入公司标签
    var company = new Company();
    var cid = req.session.user.id;

    company.inertCompanyTags(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});


router.post('/updateCompanyTags', function(req, res, next) {
                                                                    //更新公司标签
    var cid = req.session.user.id;
    var tags = req.body.tags;
    console.log(tags);

    var company = new Company();

    company.updateCompanyTags(tags,cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});





// ------------------------------------管理团队----------------------------------------------



router.get('/selectCompanyManager', function(req, res, next) {
                                                                    //提取团队信息
    var cid = req.session.user.id;
    var company = new Company();

    company.selectCompanyManager(cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        console.log(result);
        res.send(result);
    });

});


router.post('/insertCompanyManager', function(req, res, next) {
                                                                    //插入团队信息
    var company = new Company();
    var cid = req.session.user.id;
    var manager = req.body.manager;

    console.log(manager);

    company.inertCompanyManager(cid,manager.mname,manager.mposition,manager.mimg,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});


router.post('/deleteCompanyManager', function(req, res, next) {
                                                                    //删除团队信息
    // var cid = req.session.user.id;
    var mkey = req.body.mkey;
    console.log(mkey);

    var company = new Company();

    company.deleteCompanyManager(mkey,function(err,result) {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });

});




// ------------------------------------账号信息----------------------------------------------



router.post('/updateCompanyAccount', function(req, res, next) {
    //提取团队信息
    var cid = req.session.user.id;
    var account = req.body.account;
    var login = new Login();

    console.log(account);

    login.selectCompanyAccount(account,function(err,result) {
        if (err) {
            console.log(err)
        }
        if (result.length !== 0) {
            res.send('账号已被注册');
        }
        else {
            login.updateAccount(account,cid,function(err,result) {
                if (err) {
                    console.log(err)
                }
                // console.log(result);
                res.send('true');
            });
        }
    });


});



router.post('/updateCompanyPassword', function(req, res, next) {
    //提取团队信息
    var cid = req.session.user.id;
    var password = req.body.password;
    var login = new Login();

    console.log(password);

    login.updatePassword(password,cid,function(err,result) {
        if (err) {
            console.log(err)
        }
        // console.log(result);
        res.send('true');
    });

});





module.exports = router;