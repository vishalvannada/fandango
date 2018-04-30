var assert = require('assert');
var request = require('request');
var express = require('express');
var http = require("http");

describe('HTTP Tests', function() {

    it('Should not get the movies list, as the user is not logged in', function(done) {
        request.post('http://localhost:3001/getMoviesInSearchPage', function(err,res) {
         //   console.log(res.statusCode);
            //console.log(res);
            assert.equal(404, res.statusCode);
            done();
        })
    });

    it('Should get the movies list, if the user is logged in', function(done) {
        request.post('http://localhost:3001/movietheatres/getMoviesInSearchPage', function(err,res) {
           // console.log(res.statusCode);
            assert.equal(201, res.statusCode);
            done();
        })
    });

    it('Should get movies and Hall on this  request', function(done) {
        request.post('http://localhost:3001/movietheatres/getmoviesnhalls', function(error, response, body) {
            assert.equal(201, response.statusCode);
            done();
        });
    });

    it('Should not get movies and Halls if its not a proper action call', function(done) {
        request.post('http://localhost:3001/getmoviesnhalls', function(error, response, body) {
            assert.equal(404, response.statusCode);
            done();
        });
    });
    it('Should not get movies and Halls if its not a proper action call', function(done) {
        request.post('http://localhost:3001/getmoviesnhalls', function(error, response, body) {
            assert.equal(404, response.statusCode);
            done();
        });
    });

    it('Successful Search should return movies with dates', function(done) {
        request.post('http://localhost:3001/movietheatres/getMoviesInSearchPage', {

                reqBody:{movieSearch:"Dead","Date":"2018-04-29T16:12:24-07:00"}
        }, function(error, response, body) {
         //   console.log(response.body);
           // console.log(response.body.data);
            assert.equal(201, response.statusCode);
            done();
        });
    });

    it('Should return empty list on wrong search', function(done) {
        request.post('http://localhost:3001/movietheatres/getMoviesInSearchPage', {
            reqBody:{movieSearch:"",Date:""}
        }, function(error, response, body) {
        //    console.log(response.body.moviemap)
          //  console.log(response.statusCode)
            assert.equal(undefined, response.body.moviemap);
            done();
        });
    });
    it('Should return empty list on wrong Date Selection', function(done) {
        request.post('http://localhost:3001/movietheatres/getMoviesInSearchPage', {
            reqBody:{movieSearch:"",Date:"2018-04-01T16:12:24-07:00"}
        }, function(error, response, body) {
            //    console.log(response.body.moviemap)
            //  console.log(response.statusCode)
            assert.equal(undefined, response.body.moviemap);
            done();
        });
    });
    it('Should return empty list on wrong search', function(done) {
        request.post('http://localhost:3001/movietheatres/getMoviesInSearchPage', {
            reqBody:{movieSearch:"",Date:""}
        }, function(error, response, body) {
            //    console.log(response.body.moviemap)
            //  console.log(response.statusCode)
            assert.equal(undefined, response.body.moviemap);
            done();
        });
    });
});