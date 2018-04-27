var bcrypt = require('bcryptjs');
var mysql = require('mysql2');
var sequelize = require('sequelize');
var models = require('../../models');
var User = require('../../models/User')(models.sequelize, models.Sequelize);
var MoviehallUser = require("../../models/MoviehallUser")(models.sequelize, models.Sequelize);
var Admin = require("../../models/Admin")(models.sequelize, models.Sequelize);

var transactions = require("../../models/UserTransaction")(models.sequelize, models.Sequelize);


function signin(msg, callback) {

    var res = {};
    var email = msg.email;
    var password = msg.password;
    var isValidPassword = function (userpass, password) {
        return bcrypt.compareSync(password, userpass);
    }
    User.findOne({where: {email: email}}).then(function (user) {
        if (!user) {
            console.log('error');
            res.code = 401;
            res.message = "Email id doesn't exist";
            callback(null, res);
        }
        else if (!isValidPassword(user.password, password)) {
            res.code = 401;
            res.message = 'Incorrect password.';
            callback(null, res);
        }
        else {
            var data = user.get();
            console.log('user', data);
            res.code = 201;
            res.user = data;
            callback(null, res);
        }

    }).catch(function (err) {
        console.log("Error:", err);
        res.code = 401;
        res.message = 'Something went wrong with your Signin';
        callback(null, res);
    });

}

function signup(msg, callback) {

    var reqPassword = msg.user.password;
    var reqFirstname = msg.user.firstname;
    console.log("msg value", msg);
    var reqEmail = msg.user.email;
    var res = {};

    User.findOne({where: {email: reqEmail}}).then(function (user) {
        if (user) {
            res.status = 401;
            console.log("db user", user);
            res.message = 'This email already exists';
            callback(null, res);
            console.log("401 email already exists");
        }
        else {
            console.log("new user save");
            bcrypt.hash(reqPassword, 10, function (err, hash) {
                if (err) {
                    res.status = 401;
                    res.message = 'password encryption failed';
                    callback(null, res);
                    console.log("encryption failed");
                }
                else {
                    var data =
                        {
                            email: reqEmail,
                            password: hash,
                            firstname: reqFirstname,
                            displayname: reqFirstname
                        };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            res.message = 'User Account creation failed';
                            callback(null, res);
                        }
                        if (newUser) {
                            res.code = 201;
                            res.message = 'User Account creation Successful';
                            res.user = newUser;
                            callback(null, res);
                        }

                    });
                }
            });
        }
    });
}


function saveTransaction(msg, callback) {


    console.log("msg value", msg);
    var res = {};

    // var data =
    //     {
    //         transactionid: { primaryKey: true, type: Sequelize.INTEGER},
    //         displayname: {type: Sequelize.STRING},
    //         email: {type: Sequelize.STRING, validate: {isEmail: true}, unique: true},
    //         moviename: {type: Sequelize.STRING, allowNull: false},
    //         moviehall: {type: Sequelize.STRING},
    //         screenno: {type: Sequelize.STRING},
    //         movietime: {type: Sequelize.STRING},
    //         Amount : {type: Sequelize.INTEGER},
    //         tax:  {type: Sequelize.INTEGER},
    //         last_login: {type: Sequelize.DATE},
    //         image: {type: Sequelize.STRING}
    //     };


    transactions.create(data).then(function (newUser, created) {
        if (!newUser) {
            res.message = 'Transaction not Saved';
            callback(null, res);
        }
        if (newUser) {
            res.code = 201;
            res.message = 'Transaction Saved';
            res.user = newUser;
            callback(null, res);
        }

    });

}


function userDetails(msg, callback) {
    var res = {};
    console.log("email", msg.email);
    User.find({where: {email: msg.email}})
        .then(function (user) {
            res.user = user;
            res.code = 201;
            callback(null, res);
        }).catch(function (err) {
        callback(null, err)
    });
}

function searchUsers(msg,callback){
    var res={};
    var user= msg.user+"%";
    console.log("Search user function");
    User.findAll({
        where: {
            email: {$like: user}
        },
        order: [['createdAt', 'ASC']]
    }).then(function(users) {
        console.log("users",users.length);
        if (users.length === 0) {
            console.log('error');
            res.code = 401;
            res.message = "user details not found";
            callback(null, res);
        }
        else if(users){
            console.log("users details found");
            res.code = 201;
            res.users= users;
            res.messsage = "users details found";
            callback(null, res);
        }
    }).catch(err =>
        callback(null,err)
    );
}


function searchMoviehallUsers(msg,callback){
    var res= {};
    var user = msg.user+"%";
    console.log("Search user function");
    MoviehallUser.findAll({
        where: {
            email: {$like: user}
        },
        order: [['createdAt', 'ASC']]
    }).then(function(users) {
        console.log("users",users.length);
        if (users.length === 0) {
            console.log('error');
            res.code = 401;
            res.message = "user details not found";
            callback(null, res);
        }
        else if(users){
            console.log("users details found");
            res.code = 201;
            res.users= users;
            res.messsage = "users details found";
            callback(null, res);
        }
    }).catch(err =>
        callback(null,err)
    );
}




function basicInfo(msg, callback) {
    console.log("userdata", msg.user, msg.email);
    var firstName = msg.user.firstname;
    var lastName = msg.user.lastname;
    var displayName = msg.user.displayname;
    var address = msg.user.address;
    var mobile = msg.user.mobile;
    var res = {};
    User.update(
        {firstname: firstName, lastname: lastName, address: address, displayname: displayName, mobile: mobile},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )
}

function editUserAccount(msg,callback){
    console.log("userdata", msg.user, msg.email,msg.user.password);
    var firstName = msg.user.firstname;
    var lastName = msg.user.lastname;
    var displayName = msg.user.displayname;
    var address = msg.user.address;
    var mobile = msg.user.mobile;
    var newPassword = msg.user.password;
    var email = msg.user.email;
    var oldPassword = msg.user.oldpassword;
    var res = {};
    var hashnew = oldPassword;

    console.log("user",displayName);

    if(newPassword===null){
        bcrypt.hash(newPassword, 10, function (err, hash) {
            if (err) {
                res.status = 401;
                res.message = 'password encryption failed';
                callback(null, res);
                console.log("encryption failed");
            }
            else{
                hashnew = hash;
            }
        });
    }


    User.update(
        {firstname: firstName, lastname: lastName, address: address, displayname: displayName, mobile: mobile, password:hashnew , email:email},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )
}


function uploadImage(msg, callback) {
    // console.log("userdata", msg.user, msg.email);
    // var firstName = msg.user.firstname;
    // var lastName = msg.user.lastname;
    // var displayName = msg.user.displayname;
    // var address = msg.user.address;
    // var mobile = msg.user.mobile;
    var res = {};
    User.update(
        {image: msg.filename},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )
}


function changeEmail(msg, callback) {
    console.log("userdata", msg.user);
    var email = msg.user.email;
    User.find({where: {email: msg.email}})
        .then(function (user) {
            res.code = 401;
            res.message= "Email already linked with another account"
            callback(null,res);
        });
    User.update(
        {email: email},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )

}


function changePassword(msg,callback){
    var res={};
    var oldPassword = msg.user.oldpassword;
    var newPassword = msg.user.newpassword;
    var email = msg.email;

    var isValidPassword = function (userpass, password) {
        return bcrypt.compareSync(password, userpass);
    }

    bcrypt.hash(newPassword, 10, function (err, hash) {
        if (err) {
            res.status = 401;
            res.message = 'password encryption failed';
            callback(null, res);
            console.log("encryption failed");
        }
        else {
            User.findOne({where: {email: email}}).then(function (user) {
                if (!user) {
                    console.log('error');
                    res.code = 401;
                    res.message = "Email id doesn't exist";
                    callback(null, res);
                }
                else if (!isValidPassword(user.password, oldPassword)) {
                    res.code = 401;
                    res.message = 'Incorrect old password.';
                    callback(null, res);
                }
                else {
                    User.update(
                        {password: hash},
                        {returning: true, where: {email: email}}
                    )
                        .then(function (results) {
                            var data = user.get();
                            console.log('user', data);
                            res.code = 201;
                            res.user = data;
                            callback(null, res);
                        })
                        .catch(err =>
                            callback(null, err)
                        )
                }

            }).catch(function (err) {
                console.log("Error:", err);
                res.code = 401;
                res.message = 'Something went wrong with change password';
                callback(null, res);
            });

        }
    });
}


function savePayment(msg, callback) {
    var res = {};
    var cardnumber = msg.user.cardnumber;
    var month = msg.user.month;
    var year = msg.user.year;
    var zipcode = msg.user.zipcode;
    User.update(
        {cardnumber: cardnumber, cardmonth: month, cardyear: year, zipcode: zipcode},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )
}


function purchaseHistory(msg,callback){
    var res= {};
    console.log("Search user function");
    var email = msg.email;
    transactions.findAll({
        where: {
            email: email}
    }).then(function(transactions) {
        console.log("users",transactions.length);
        if (transactions.length === 0) {
            console.log('error');
            res.code = 401;
            res.message = "purchase History not available";
            callback(null, res);
        }
        else if(transactions){
            console.log("purchase  History found");
            res.code = 201;
            res.transactions= transactions;
            res.messsage = "purchase  History  found";
            callback(null, res);
        }
    }).catch(err =>
        callback(null,err)
    );
}

function deletePayment(msg, callback) {
    var res = {};
    console.log("userdata", msg.user);
    var cardnumber = "";
    var month = "";
    var year = "";
    var zipcode = "";
    User.update(
        {cardnumber: cardnumber, cardmonth: month, cardyear: year, zipcode: zipcode},
        {returning: true, where: {email: msg.email}}
    )
        .then(function (results) {
            User.find({where: {email: msg.email}})
                .then(function (user) {
                    res.user = user;
                    res.code = 201;
                    callback(null, res);
                }).catch(function (err) {
                console.log(['error'], err.stack);
            });
        })
        .catch(err =>
            callback(null, err)
        )
}


function deleteUser(msg,callback){
    var res={};
    console.log("email",msg.email);
    User.destroy({
        where: {
            email: msg.email
        }
    }).then(function(result){
        res.code = 201;
        res.message= "Delete User Successful";
        callback(null,res);
    }).catch( err =>
        callback(null,err)
    );
}

function moviehallSignin(msg, callback) {

    var res = {};
    var email = msg.email;
    var password = msg.password;

    MoviehallUser.findOne({where: {email: email}}).then(function (user) {
        if (!user) {
            console.log('error');
            res.code = 401;
            res.message = "Email id doesn't exist";
            callback(null, res);
        }
        else if (user.password !== password) {
            res.code = 401;
            res.message = 'Incorrect password.';
            callback(null, res);
        }
        else {
            var data = user.get();
            console.log('user', data);
            res.code = 201;
            res.user = data;
            callback(null, res);
        }

    }).catch(function (err) {
        console.log("Error:", err);
        res.code = 401;
        res.message = 'Something went wrong with your Signin';
        callback(null, res);
    });

}


function adminSignin(msg, callback) {
    var res = {};
    var email = msg.email;
    var password = msg.password;


    Admin.findOne({where: {email: email}}).then(function (user) {
        console.log("userpassword", password);
        console.log("dbpassword", user.password);
        if (!user) {
            console.log('error');
            res.code = 401;
            res.message = "Email id doesn't exist";
            callback(null, res);
        }
        else if (user.password !== password) {
            res.code = 401;
            res.message = 'Incorrect password.';
            callback(null, res);
        }
        else {
            var data = user.get();
            console.log('user', data);
            res.code = 201;
            res.user = data;
            callback(null, res);
        }
    }).catch(function (err) {
        console.log("Error:", err);
        res.code = 401;
        res.message = 'Something went wrong with your Signin';
        callback(null, res);
    });
}


exports.signin = signin;
exports.signup = signup;
exports.basicInfo = basicInfo;
exports.changeEmail = changeEmail;
exports.changePassword = changePassword;
exports.savePayment = savePayment;
exports.userDetails = userDetails;
exports.deletePayment = deletePayment;
exports.moviehallSignin = moviehallSignin;
exports.uploadImage = uploadImage;
exports.adminSignin = adminSignin;
exports.searchUsers = searchUsers;
exports.searchMoviehallUsers = searchMoviehallUsers;
exports.purchaseHistory = purchaseHistory;
exports.deleteUser = deleteUser;
exports.editUserAccount = editUserAccount;