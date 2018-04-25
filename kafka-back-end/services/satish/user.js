var bcrypt = require('bcryptjs');
var mysql = require('mysql2');
var sequelize = require('sequelize');
var models = require('../../models');
var User = require('../../models/User')(models.sequelize, models.Sequelize);
var UserProfile = require('../../models/User')(models.sequelize, models.Sequelize);

function signin(msg, callback){

    var res = {};
    var email=msg.email;
    var password=msg.password;
    var isValidPassword = function(userpass,password){
        return bcrypt.compareSync(password, userpass);
    }
    User.findOne({ where: {email:email }}).then(function (user) {
        if(!user){
            console.log('error');
            res.code = 401;
            res.message = "Email id doesn't exist";
            callback(null, res);
        }
        else if (!isValidPassword(user.password,password)) {
            res.code=401;
            res.message= 'Incorrect password.';
            callback(null, res);
        }
        else {
            var data = user.get();
            console.log('user',data);
            res.code=201;
            res.user = data;
            callback(null,res);
        }

    }).catch(function (err) {
        console.log("Error:",err);
        res.code=401;
        res.message= 'Something went wrong with your Signin';
           callback(null, res);
    });

}

function signup(msg, callback){

    var reqPassword = msg.user.password;
    var reqFirstname = msg.user.firstname;
    console.log("msg value",msg);
    var reqEmail = msg.user.email;
    var  res= {};

    User.findOne({where: {email:reqEmail}}).then (function(user){
        if(user){
            res.status = 401;
            console.log("db user",user);
            res.message= 'This email already exists';
            callback(null,res);
            console.log("401 email already exists");
        }
        else{
            console.log("new user save");
            bcrypt.hash(reqPassword,10,function (err,hash) {
                if(err){
                    res.status = 401;
                    res.message= 'password encryption failed';
                    callback(null,res);
                    console.log("encryption failed");
                }
                else {
                    var data =
                        {
                            email: reqEmail,
                            password: hash,
                            firstname: reqFirstname,
                        };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            res.message= 'User Account creation failed';
                            callback(null,res);
                        }
                        if (newUser) {
                            res.code = 201;
                            res.message= 'User Account creation Successful';
                            res.user = newUser;
                            callback(null,res);
                        }

                    });
                }
            });
        }
    });
}

function userDetails(msg,callback){
    var res={};
    console.log("email",msg.email);
    User.find({where: {email:msg.email}})
        .then(function(user){
            res.user = user;
            res.code = 201;
            callback(null,res);
        }).catch(function (err) {
        callback(null,err)
    });
}

function basicInfo(msg,callback){
    console.log("userdata",msg.user, msg.email);
    var firstName = msg.user.firstname;
    var lastName = msg.user.lastname;
    var displayName = msg.user.displayname;
    var address = msg.user.address;
    var mobile = msg.user.mobile;
    var  res= {};
    User.update(
        {firstname: firstName, lastname: lastName, address:address, displayname: displayName, mobile:mobile},
        {returning: true, where: {email: msg.email}}
    )
        .then(function(results) {
            User.find({where: {email:msg.email}})
                .then(function(user){
                    res.user = user;
                    res.code = 201;
                    callback(null,res);
                }).catch(function (err) {
               console.log(['error'], err.stack);
        });
        })
        .catch(err =>
            callback(null,err)
        )
}

function changeEmail(msg,callback){
    console.log("userdata",msg.user);
    var email = msg.user.email;
    User.update(
        {  email:email},
        {returning: true, where: {email: msg.email}}
    )
        .then(function(results) {
            User.find({where: {email:msg.email}})
                .then(function(user){
                    res.user = user;
                    res.code = 201;
                    callback(null,res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null,err)
        )

}

function changePassword(msg,callback){
    console.log("userdata",msg.user);
    var oldPassword = msg.user.oldPassword;
    var newPassword = msg.user.newPassword;

    var res = {};
    var email=msg.email;
    var password=msg.password;

    var isValidPassword = function(userpass,password){
        return bcrypt.compareSync(password, userpass);
    }

    bcrypt.hash(reqPassword,10,function (err,hash) {
        if(err){
            res.status = 401;
            res.message= 'password encryption failed';
            callback(null,res);
            console.log("encryption failed");
        }
        else{
            User.findOne({ where: {email:email }}).then(function (user) {
                if(!user){
                    console.log('error');
                    res.code = 401;
                    res.message = "Email id doesn't exist";
                    callback(null, res);
                }
                else if (!isValidPassword(user.password,oldPassword)) {
                    res.code=401;
                    res.message= 'Incorrect password.';
                    callback(null, res);
                }
                else {
                    User.update(
                        { password:hash},
                        {returning: true, where: {email: msg.email}}
                    )
                        .then(function(results) {
                            var data = user.get();
                            console.log('user',data);
                            res.code=201;
                            res.user = data;
                        })
                        .catch(err =>
                            callback(null,err)
                        )
                }

            }).catch(function (err) {
                console.log("Error:",err);
                res.code=401;
                res.message= 'Something went wrong with change password';
                callback(null, res);
            });

        }
    });
}

function savePayment(msg,callback){
    console.log("userdata",msg.user);
    var cardnumber = msg.user.cardnumber;
    var month = msg.user.cardmonth;
    var year = msg.user.cardyear;
    var zipcode = msg.user.zipcode;
    User.update(
        {  cardnumber:cardnumber, cardmonth:month, cardyear: year, zipcode:zipcode},
        {returning: true, where: {email: msg.email}}
    )
        .then(function(results) {
            User.find({where: {email:msg.email}})
                .then(function(user){
                    res.user = user;
                    res.code = 201;
                    callback(null,res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null,err)
        )
}

function deletePayment(msg,callback){
    console.log("userdata",msg.user);
    var cardnumber = "";
    var month = "";
    var year = "";
    var zipcode = "";
    User.update(
        {  cardnumber:cardnumber, cardmonth:month, cardyear: year, zipcode:zipcode},
        {returning: true, where: {email: msg.email}}
    )
        .then(function(results) {
            User.find({where: {email:msg.email}})
                .then(function(user){
                    res.user = user;
                    res.code = 201;
                    callback(null,res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null,err)
        )
}

exports.signin = signin;
exports.signup= signup;
exports.basicInfo = basicInfo;
exports.changeEmail = changeEmail;
exports.changePassword = changePassword;
exports.savePayment = savePayment;
exports.userDetails = userDetails;
exports.deletePayment = deletePayment;