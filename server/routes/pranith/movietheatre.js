var express = require('express');
var router = express.Router();
var kafka = require('../kafka/client');

router.post('/getMoviesInSearchPage', function (req, res) {
console.log("from getMoviesInSearchPage_topic entry");
console.log(req,req.body,"-----------------------------------------------------");
    kafka.make_request('getMoviesInSearchPage_topic', {"reqBody":req.body}, function (err, results) {

        if (results.code == 200) {
            console.log(results);
            res.status(201).send(results)
        }
        else {
            console.log('fuckedup', results);
            console.log('fuckedup', results);
            // res.status(401).end()
        }

    });
});

// getmoviesnhalls

router.post('/getmoviesnhalls', function (req, res) {
    console.log("from getMoviesInSearchPage_topic entry");
    console.log("-----------------------------------------------------");
    kafka.make_request('getMoviesnHalls_topic',{"reqBody":req.body}, function (err, results) {

        if (results.code == 200) {
            console.log(results);
            res.status(201).send(results)
        }
        else {
            console.log('fuckedup', results);
            console.log('fuckedup', results);
            // res.status(401).end()
        }

    });
});

router.post('/addmovies', function (req, res) {
   // console.log("from addmovies_topic entry");
    console.log("-----------------------------------------------------");
    console.log(req.body.Date);
    kafka.make_request('addmovies_topic',{"reqBody":req.body}, function (err, results) {

        if (results.code == 200) {
           // console.log(results);
            res.status(201).send(results)
        }
        else if(results.code=400){

            //console.log(results);
            res.status(208).send("movie not added");
            // res.status(401).end()
        }else {
            console.log('fuckedup', results);

        }

    });
});



router.post('/savedetails', function (req, res, next) {


    if (req.session) {
        const username = req.param('username');
        const email = req.param('email');
        let phoneNumber = '';
        let aboutMe = '';
        let skills = '';

        if (req.param('phoneNumber')) {
            phoneNumber = req.param('phoneNumber');
        }

        if (req.param('aboutMe')) {
            aboutMe = req.param('aboutMe');
        }

        if (req.param('skills')) {
            skills = req.param('skills');
        }

        kafka.make_request('saveProfileDetails_topic',
            {
                oldname: req.session.username,
                username: username,
                aboutMe: aboutMe,
                skills: skills,
                phoneNumber: phoneNumber,
                email: email,
            },

            function (err, results) {
                console.log('in result');
                if (results.code == 200) {
                    console.log(results);
                    res.status(201).send(results.result)
                }
                else {
                    res.status(401).json({
                        message: results.message
                    })
                }

            });
    }
    else {
        res.status(401).end();
    }

})

module.exports = router;