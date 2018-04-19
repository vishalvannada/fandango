var mongo = require("./mongo");
var MongoConPool = require("./mongoConnPool");
// var mongoURL = "mongodb://localhost:27017/KAYAK";
// var winston = require('winston');

//winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
//winston.remove(winston.transports.Console);

function groupBy(arr, key) {
    var newArr = [],
        types = {},
        newItem, i, j, cur;
    for (i = 0, j = arr.length; i < j; i++) {
        cur = arr[i];
        if (!(cur[key] in types)) {
            types[cur[key]] = { type: cur[key], data: [] };
            newArr.push(types[cur[key]]);
        }
        types[cur[key]].data.push(cur);
    }
    return newArr;
}


function handle_request(msg, callback) {

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});

    var res = {};
    var i = 0;
    try {

        console.log("msg is-----------------------------------------------", msg);
        var queryJson = {
            "HallID": new RegExp(msg.reqBody.movieSearch)
        };

        MongoConPool.find('movieHall', queryJson,function (err, movie) {
            if (err) {
                res.code = "401";
                callback(null, res);
            }
            else {

                resArr = [];
                resArr = movie.map(function (file) {
                    var carsJSON = {};
                    carsJSON.id = movie[i].ID;
                    var spl = movie[i].HallID.split('|');
                    carsJSON.theatreName =spl[0];
                    carsJSON.theatreCity =spl[1];
                    carsJSON.theatreState=spl[2];
                    carsJSON.theatreZip =spl[3];
                    carsJSON.movie = movie[i].movie;
                    carsJSON.ScreenNo = movie[i].ScreenNo;
                    carsJSON.Showtimes = movie[i].Showtimes;
                    carsJSON.NoofSeats = movie[i].NoofSeats;
                    carsJSON.TicketPrice = movie[i].Price;
                    //carsJSON.Company=cars[i].Company;
                    i = i + 1;
                    return carsJSON;
                });
var resmap=groupBy(resArr,"theatreName");
console.log(resmap);

                res.code = 200;
                res.movietheatre = resArr;
                res.moviemap=resmap;
                console.log("movie theatres are",resArr);
                callback(null, res);
            }
        });

    }
    catch
        (e) {
        res.code = "401";
        callback(null, res);
    }
    // winston.remove(winston.transports.File);
    // winston.add(winston.transports.Console);
}

exports.handle_request = handle_request;