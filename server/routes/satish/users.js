var express = require('express');
var router = express.Router();
var passport = require('passport');
var kafka = require('../kafka/client');



router.get('/fetchuser',function(req,res){
    if(req.user){
        res.status(201).json({user: req.user});
    }
    else{
        res.status(202).json({user: null});

    }
});router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) {
            return res.status(200).json({message: info.message});
        }
        else{
            req.logIn(user, function(err) {
                if (err) {
                    console.log(err);
                    return res.status(401);
                }
                else{
                    req.session.save(function(err){
                        console.log(req.user);
                        console.log(req.isAuthenticated());
                        req.session.username = req.user;
                        return res.status(201).json({username: req.user});
                    });
                }
            });
        }

    })(req, res, next);
});

router.post('/signup', function (req, res) {
    kafka.make_request('signup',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "SignUp failed"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Details Saved successfully"});
            }
            else {
                res.status(401).json({message: "SignUp failed"});

            }
        }
    });

});

router.get('/signout', function (req, res) {
    console.log("Authenticated:",req.user);
     req.logout();
    req.session.destroy(function (err) {
        if (!err) {
            res.status(201).clearCookie('connect.sid').json({message: "Success"});
        } else {
            // handle error case...
        }

    });

});

router.post('/basicInfo', function (req, res) {
    kafka.make_request('basicInfo',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "Unexpected error occured"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully"});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });

});


router.post('/email', function (req, res) {
    kafka.make_request('changeEmail',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "Unexpected error occured"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User email Saved successfully"});
            }
            else {
                res.status(401).json({message: "user email update failed"});

            }
        }
    });

});

router.post('/password', function (req, res) {
    kafka.make_request('changePassword',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "Unexpected error occured"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully"});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });

});

router.post('/password', function (req, res) {
    kafka.make_request('changePassword',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "Unexpected error occured"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully"});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });

});

router.post('/savePayment', function (req, res) {
    kafka.make_request('savePayment',{"user":req.body}, function(err,results){
        console.log('in result');
        console.log(results);
        if(err){
            res.status(401).json({message: "Unexpected error occured"});
        }
        else
        {
            if(results.code === 201){
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully"});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });

});


module.exports = router;