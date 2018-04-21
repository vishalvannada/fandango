var express = require('express');
var router = express.Router();
var kafka = require('../kafka/client')

router.get('/getMoviesInHomePageCarousel', function (req, res) {

    kafka.make_request('getMoviesInHomePageCarousel_topic', {}, function (err, results) {

        if (results.code == 200) {
            console.log(results);
            res.status(201).send(results.movies)
        }
        else {
            console.log('roo', results);
            // res.status(401).end()
        }

    });
});



router.get('/getMovieOverview', function (req, res) {

    console.log(req.param('tmdbid'));

    kafka.make_request('getMovieOverview_topic', {"tmdbid" : req.param('tmdbid')}, function (err, results) {


        if (results.code == 200) {
            console.log("inresult", results);
            res.status(201).send(results.movie)
        }
        else {
            console.log('roo', results);
            res.status(401).end()
        }

    });
});


router.post('/saveReview', function (req, res, next) {

    console.log(req.param('projectName'))

    console.log(req.param('stars'))

    //
    // if (req.session) {
    //     const username = req.param('username');
    //     const email = req.param('email');
    //     let phoneNumber = '';
    //     let aboutMe = '';
    //     let skills = '';
    //
    //     if (req.param('phoneNumber')) {
    //         phoneNumber = req.param('phoneNumber');
    //     }
    //
    //     if (req.param('aboutMe')) {
    //         aboutMe = req.param('aboutMe');
    //     }
    //
    //     if (req.param('skills')) {
    //         skills = req.param('skills');
    //     }
    //
    //     kafka.make_request('saveProfileDetails_topic',
    //         {
    //             oldname: req.session.username,
    //             username: username,
    //             aboutMe: aboutMe,
    //             skills: skills,
    //             phoneNumber: phoneNumber,
    //             email: email,
    //         },
    //
    //         function (err, results) {
    //             console.log('in result');
    //             if (results.code == 200) {
    //                 console.log(results);
    //                 res.status(201).send(results.result)
    //             }
    //             else {
    //                 res.status(401).json({
    //                     message: results.message
    //                 })
    //             }
    //
    //         });
    // }
    // else {
    //     res.status(401).end();
    // }

})

module.exports = router;