var express = require('express');
var router = express.Router();
var Home = require('../db/home');

router.get('/getHomeJob', function(req, res, next) {
    // var id = req.session.user.id;
    var home = new Home();
    home.selectJob(function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


router.get('/getHomeCompany', function(req, res, next) {
    // var id = req.session.user.id;
    var home = new Home();
    home.selectCompany(function(err,result){
        if(err){
            console.log(err)
        }
        // var arr = result[0].statement.split('\n')
        console.log(result);
        res.send(result);
    });
});


module.exports = router;