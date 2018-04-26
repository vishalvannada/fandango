var express = require('express');
var router = express.Router();
var passport = require('passport');
var kafka = require('../kafka/client');

var multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.user.user.email + '-' + Date.now() + '.jpeg')
    }
});

var upload = multer({storage: storage});

var type = upload.single('mypic');


router.get('/fetchuser', function (req, res) {
    console.log(req.user)
    if (req.user) {
        res.status(201).json({user: req.user});
    }
    else {
        res.status(202).json({user: null});

    }
});

router.post('/signin', function (req, res, next) {
    passport.authenticate('user', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log("here", info)
            return res.status(200).json({message: info.message});
        }
        else {
            req.logIn(user, function (err) {
                if (err) {
                    console.log(err);
                    return res.status(401);
                }
                else {
                    req.session.save(function (err) {
                        console.log("login user", req.user);
                        console.log(req.isAuthenticated());
                        req.session.email = req.user.user.email;
                        req.session.accountType = "user";
                        req.user.user.accountType = "user";
                        console.log("session email", req.session.email);
                        return res.status(201).json({username: req.user.user});
                    });
                }
            });
        }

    })(req, res, next);
});

router.get('/userDetails', function (req, res) {
    kafka.make_request('userDetails', {"email": req.session.email}, function (err, results) {
        console.log('in result');
        console.log(results.user);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User details retrieved successfully", user: results.user});
            }
            else {
                res.status(401).json({message: "user details not available"});

            }
        }
    });

});


router.post('/movieHallSignin', function (req, res, next) {
    passport.authenticate('moviehall', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log("here", info)
            return res.status(200).json({message: info.message});
        }
        else {
            req.logIn(user, function (err) {
                if (err) {
                    console.log(err);
                    return res.status(401);
                }
                else {
                    req.session.save(function (err) {
                        console.log("movie hall user", req.user);
                        console.log(req.isAuthenticated());
                        req.session.email = req.user.user.email;
                        req.session.accountType = "MoviehallAdmin";
                        req.user.user.accountType = "MoviehallAdmin";
                        console.log("session email", req.session.email);
                        return res.status(201).json({username: req.user.user,accountType:"MoviehallAdmin"});
                    });
                }
            });
        }
    })(req, res, next);
});

router.post('/adminSignin', function (req, res, next) {
    passport.authenticate('adminSignin', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log("here", info)
            return res.status(200).json({message: info.message});
        }
        else {
            req.logIn(user, function (err) {
                if (err) {
                    console.log(err);
                    return res.status(401);
                }
                else {
                    req.session.save(function (err) {
                        console.log("movie hall user", req.user);
                        console.log(req.isAuthenticated());
                        req.session.email = req.user.user.email;
                        // req.session.accountType = "Admin";
                        // req.user.user.accountType = "Admin";
                        console.log("session email", req.session.email);
                        return res.status(201).json({username: req.user.user,accountType:"Admin"});
                    });
                }
            });
        }
    })(req, res, next);
});

router.post('/signup', function (req, res) {
    kafka.make_request('signup', {"user": req.body}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: results.message});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Details Saved successfully"});
            }
            else {
                res.status(401).json({message: results.message});

            }
        }
    });

});

router.get('/signout', function (req, res) {
    console.log("Authenticated:", req.user);

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
    console.log("session email", req.session.email);
    kafka.make_request('basicInfo', {"user": req.body, "email": req.session.email}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully", user: results.user});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });
});


router.post('/email', function (req, res) {
    console.log("session email", req.session.email);
    console.log("req user",req.user);
    kafka.make_request('changeEmail', {"user": req.body,"email":req.session.email}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                req.session.email= results.user.email;
                req.user= results.user;
                res.status(201).json({message: "User email Saved successfully",user:results.user});
            }
            else {
                res.status(401).json({message: "user email update failed"});

            }
        }
    });

});


router.post('/password', function (req, res) {
    kafka.make_request('changePassword', {"user": req.body}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
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
    kafka.make_request('savePayment', {"user": req.body}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User Basic info Saved successfully"});
            }
            else {
                res.status(401).json({message: "user Basic info update failed"});

            }
        }
    });

});


router.post('/image', type, function (req, res) {

    console.log("dfghjbkn")
    console.log("fghjm",req.user.user.email)
    console.log(req.file.filename)
    req.file.filename;

    kafka.make_request('uploadimage', {"filename": req.file.filename, "email" : req.user.user.email}, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User email Saved successfully", user : results.user});
            }
            else {
                res.status(401).json({message: "user email update failed"});

            }
        }
    });

});0





module.exports = router;
