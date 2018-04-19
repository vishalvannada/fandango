var express = require('express');
//var mysql = require('./mysql');
//var passport = require('passport');
//var bcrypt = require('bcrypt');
var kafka = require('../kafka/client');

var router = express.Router();


router.post('/signup', function (req, res) {

    console.log("Inside the SignUp API handler 'Response -> '", req);
    kafka.make_request('signup',{"user":req.body}, function(err,results){

        //console.log('in result');
        //console.log("wtf",results);
        if(err){
            res.status(401).json({message: "SignUp failed"});

        }
        else
        {
            if(results.status == 201){
                res.status(201).json({message: "User Details Saved successfully"});
            }
            else {
                res.status(401).json({message: "SignUp failed"});

            }
        }
    });




});

module.exports = router;