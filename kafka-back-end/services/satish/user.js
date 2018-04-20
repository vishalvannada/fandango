var bcrypt = require('bcryptjs');
var mysql = require('mysql2');
var sequelize = require('sequelize');
var models = require('../../models');
var User = require('../../models/User')(models.sequelize, models.Sequelize);
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
exports.signin = signin;
exports.signup= signup;