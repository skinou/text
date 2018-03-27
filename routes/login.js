var express = require('express');
var router = express.Router();
var Login = require('../db/login');
var User = require('../db/user');
var Company = require('../db/company');

/* GET users listing. */
// ------------------------------------------用户注册/登陆---------------------------------------------------


router.post('/userLogin', function(req, res, next) {
    console.log(req.body.account);
    console.log(req.body.obj);
    // console.log(req.body.password)
    var login = new Login();
    login.selectAccount(req.body.account,function(err,result){
        if(err){
            console.log(err)
        }
        if(result.length!==0){
            req.session.user={
                account:result[0].account,
                name:result[0].name,
                id:result[0].id,
                type:'个人用户'
            }
        }

        res.send(result);
    });
});

router.post('/userReg', function(req, res, next) {
    console.log(req.body.account);
    console.log(req.body.password);
    console.log(req.body.id);
    console.log(req.body.name);
    var login = new Login();
    var user = new User();
    login.selectId(req.body.id,function(err,result){
        if(err){
            console.log(err)
        }
        if(result.length!==0){
            res.send('身份证号已被注册');
        }
        else {
            login.selectAccount(req.body.account,function(err,result){
                if(err){
                    console.log(err)
                }
                if(result.length!==0){
                    res.send('账号已被注册');
                }
                else{
                    login.userReg(req.body.id,req.body.name,req.body.account,req.body.password,function(err){
                        if(err){
                            console.log(err)
                        }
                        user.insertUserInfo(req.body.id,req.body.name,function (err) {
                            if(err){
                                console.log(err)
                            }
                        });
                        user.insertUserExpect(req.body.id,function (err) {
                            if(err){
                                console.log(err)
                            }
                        });
                        user.insertDes(req.body.id,function (err) {
                            if(err){
                                console.log(err)
                            }
                        });
                        res.send('注册成功');
                    });
                }
            });
        }
    });
});

router.get('/home', function(req, res, next) {
    console.log(req.session.user);
    res.send(req.session.user)
    // var login = new Login();
});

// ------------------------------------------公司注册/登陆---------------------------------------------------


router.post('/companyLogin', function(req, res, next) {
    console.log(req.body.account);
    // console.log(req.body.password);
    var login = new Login();
    login.selectCompanyAccount(req.body.account,function(err,result){
        if(err){
            console.log(err)
        }
        if(result.length!==0){
            // req.session.cname = result[0].cname
            req.session.user={
                id:result[0].cid,
                name:result[0].cname,
                type:'公司用户',
                account:result[0].account
            }
        }
        res.send(result);
    });
});


router.post('/companyReg', function(req, res, next) {
    console.log(req.body.account);
    console.log(req.body.cname);
    console.log(req.body.cid);
    var login = new Login();
    var account = req.body.account;
    var cname = req.body.cname;
    var cid = req.body.cid;
    console.log(account);
    console.log(cname);
    console.log(cid);
    login.selectCompanyAccount(account,function(err,result){
        if(err){
            console.log(err)
        }
        if(result.length!==0){
            res.send('账号已被注册');
        }
        else{
            login.selectCid(cid,function(err,result) {
                if (err) {
                    console.log(err)
                }
                if (result.length !== 0) {
                    res.send('注册编号已被使用');
                }
                else {
                    login.selectCname(cname,function(err,result) {
                        if (err) {
                            console.log(err)
                        }
                        if (result.length !== 0) {
                            res.send('公司名已被注册');
                        }
                        else {

                            res.send('注册成功');
                            // login.companyReg(cid,cname,account,password,function(err){
                            //     if(err){
                            //         console.log(err)
                            //     }
                            //     company.insertCompanyInfo(cid,cname,function (err) {
                            //         if(err){
                            //             console.log(err)
                            //         }
                            //     });
                            // });
                        }
                    });

                }

            });
        }
    });
});



// router.post('/getCompanyName', function(req, res, next) {
//     var login = new Login();
//     var cname = req.body.cname;
//     // console.log(cname);
//     login.selectCname(cname,function(err,result){
//         if(err){
//             console.log(err)
//         }
//         // if( result[0].cimg !==null){
//         //     var imgData = new Buffer( result[0].cimg).toString();
//         //     console.log(result);
//         //     result[0].cimg = imgData;
//         // }
//         console.log(result);
//         res.send(result)
//     });
// });


module.exports = router;