var mongo = require("./mongo");
var MongoConPool = require("./mongoConnPool");
var moment = require('moment');
const delay = require('delay');
var randomInt = require('random-int');
var MongoClient = require('mongodb').MongoClient;

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
            types[cur[key]] = {type: cur[key], data: []};
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
    console.log("---------------------------------------------", moment(msg.reqBody.Date).format("YYYY-MM-DD"));
    var res = {};
    var i = 0;
    try {
        //console.log((new Date()).format('YYYY MM DD'));
        // console.log("msg is-----------------------------------------------", msg);
        //movieSearch: '95126', Date: '2018-04-20T20:12:00-07:00'
        var d2=new Date(moment(msg.reqBody.Date).format("YYYY-MM-DD"));

        var d = new Date(moment(msg.reqBody.Date).format("YYYY-MM-DD"));
        d.setDate(d.getDate() - 1);
        console.log(d,d2);


        var queryJson = {
            "movie.MovieName": new RegExp(msg.reqBody.movieSearch), "Date": {"$gte": new Date(d), "$lte": new Date(d2)}
        };

        MongoConPool.find('movieHall', queryJson, function (err, movie) {
            if (err) {
                res.code = "402";
                console.log(err, "--------------------------");
                callback(null, res);
            }
            else {

                resArr = [];
                resArr = movie.map(function (file) {
                    var carsJSON = {};
                    carsJSON.id = movie[i].ID;
                    var spl = movie[i].HallID.split('|');
                    carsJSON.theatreName = spl[0];
                    carsJSON.theatreCity = spl[1];
                    carsJSON.theatreState = spl[2];
                    carsJSON.theatreZip = spl[3];
                    carsJSON.movie = movie[i].movie;
                    carsJSON.ScreenNo = movie[i].ScreenNo;
                    carsJSON.Showtimes = movie[i].Showtimes;
                    carsJSON.NoofSeats = movie[i].NoofSeats;
                    carsJSON.TicketPrice = movie[i].Price;
                    carsJSON.user = movie[i].user;

                    //carsJSON.Company=cars[i].Company;
                    i = i + 1;
                    return carsJSON;
                });
                var resmap = groupBy(resArr, "theatreName");
                // console.log(resmap);

                res.code = 200;
                res.movietheatre = resArr;
                res.moviemap = resmap;
                //     console.log("movie theatres are", resArr);

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


function handle_addMovies(msg, callback) {

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});
 //  console.log("-----------------------------------------in addmovies--");
    var showtimes = [];
    for (let i = 0; i < msg.reqBody.showTimes.length; i++) {
        var showSeats = {};
        showSeats[msg.reqBody.showTimes[i]] = msg.reqBody.noOfSeats;
        showtimes.push(showSeats);
    }


    // console.log(showtimes, "--------------------------------------");
    var res = {};
    var i = 0;


    var d = new Date();
    var arrayDates =[];
    var queryJsonArray=[];

    for (let i = 0; i < 6; i++) {
        let newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        arrayDates.push(newDate);
        //  console.log(newDate);
    }
console.log(arrayDates);
   for (let i = 0; i < 6; i++)

   {

       //console.log(d,"??????????????????????????????????????????????????????????????????????????????????");
       var queryJson = {
           // "_id":parseInt(randomInt(9,1000000)),
           "ID": randomInt(9,1000000),
           "HallID": msg.reqBody.theatre.data[0].theatreName + "|" + msg.reqBody.theatre.data[0].theatreCity + "|" +
           msg.reqBody.theatre.data[0].theatreState + "|" + msg.reqBody.theatre.data[0].theatreZip,
           "movie": {
               "movieId": msg.reqBody.movie.tmdbid,
               "poster_path": msg.reqBody.movie.poster_path,
               "MovieName": msg.reqBody.movie.movie
           },
           "ScreenNo": 1,
           "Showtimes": showtimes,
           "NoofSeats": msg.reqBody.noOfSeats,
           "TicketPrice": 10,
           "Date": arrayDates[i],
           "user": "pranithkouda@gmail.com"
       };

       queryJsonArray.push(queryJson);

   }
   console.log(queryJsonArray);
    {
       // console.log(msg.reqBody,"????????????????????????????????????????????????????");
        try {

          //  console.log("msg is-----------------------------------------------");



            var queryJsonSearch = {
                "HallID": msg.reqBody.theatre.data[0].theatreName + "|" + msg.reqBody.theatre.data[0].theatreCity + "|" +
                msg.reqBody.theatre.data[0].theatreState + "|" + msg.reqBody.theatre.data[0].theatreZip,
                "movie": {
                    "movieId": msg.reqBody.movie.tmdbid,
                    "poster_path": msg.reqBody.movie.poster_path,
                    "MovieName": msg.reqBody.movie.movie
                },
                "ScreenNo": 1,
                "Showtimes": showtimes,
                "NoofSeats": msg.reqBody.noOfSeats,
                "TicketPrice": 10,
                "Date": {$lte:d}
            };



           /* var queryJson = {
               // "_id":parseInt(randomInt(9,1000000)),
                "ID": 108.0,
                "HallID": msg.reqBody.theatre.data[0].theatreName + "|" + msg.reqBody.theatre.data[0].theatreCity + "|" +
                msg.reqBody.theatre.data[0].theatreState + "|" + msg.reqBody.theatre.data[0].theatreZip,
                "movie": {
                    "movieId": msg.reqBody.movie.tmdbid,
                    "poster_path": msg.reqBody.movie.poster_path,
                    "MovieName": msg.reqBody.movie.movie
                },
                "ScreenNo": 1,
                "Showtimes": showtimes,
                "NoofSeats": msg.reqBody.noOfSeats,
                "TicketPrice": 10,
                "Date": d
            };*/
   //   console.log("before delay)

                {
                    // Executed after 200 milliseconds
                  //  console.log("after delay)

            MongoConPool.findOne('movieHall', queryJsonSearch, function (err, movie) {
                if (err) {
                    res.code = "401";
                    callback(null, res);
                  //  console.log("into error===============================================", err)
                }
                else {
                    if (movie == null)
                    {
                        console.log(movie);


                       // var batch = col.initializeOrderedBulkOp();
                       // console.log("adding movie================================================");
                        MongoConPool.insertMany('movieHall', queryJsonArray, function (err, movie) {
                            if (err) {
                                res.code = "401";
                                //  callback(null, res);
                                console.log(err);
                                console.log("error in adding movie-=-=============------------------------------=======")
                            }
                            else {

                                console.log("-moviea added-----------------------------------------------");
                                res.result = movie;

                                res.code = 200;
                                 callback(null, res);
                            }
                        });

                    }
                    else {
                        res.code = 400;
                        callback(null, res);
                    }

                    //  res.result = movie;
                    // res.code = 200;
                    // callback(null, res);
                }
            });

                }


            /* MongoConPool.insert('movieHall', queryJson, function (err, movie) {
                 if (err) {
                     res.code = "401";
                     callback(null, res);
                 }
                 else {

                     console.log(movie, "------------------------------------------------");
                     res.result = movie;
                     res.code = 200;
                     callback(null, res);
                 }
             });*/
        }
        catch
            (e) {
            res.code = "401";
            callback(null, res);
        }
    }



    // winston.remove(winston.transports.File);
    // winston.add(winston.transports.Console);
}




function handle_MoviesnHalls(msg, callback) {

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});

    var res = {};
    var i = 0;
    try {
        var date = new Date();
        //   console.log("date is-----------------------------------------------");
        // console.log(date);
        //console.log("msg is-----------------------------------------------", msg);
        var queryJson = {
            //  "Date": {$gte : new Date()}

            //hard code
            "HallID": new RegExp("|"),"user":"pranithkouda@gmail.com"
        };

        var queryMovies = {poster_path: new RegExp('/')};


        MongoConPool.find('movies', queryMovies, function (err, movie) {
            if (err) {
                //      console.log("error------------------------------------------------------");
                res.code = "403";
                callback(null, res);
            }
            else {
                var movies = [];
                //   console.log("found movie names");
                resArr = [];
                resArr = movie.map(function (file) {

                    var carsJSON = {};
                    carsJSON.movie = movie[i].title;
                    //carsJSON.title=movie[i].title;
                    carsJSON.tmdbid = movie[i].tmdbid;
                    carsJSON.poster_path = movie[i].poster_path;


                    //carsJSON.Company=cars[i].Company;
                    i = i + 1;
                    return carsJSON;
                });
                // var resmap=groupBy(resArr,"theatreName");
                //console.log(resArr);
                //console.log(movies);

                res.code = 200;
                // res.movietheatre = resArr;
                res.moviemap = resArr;
                // console.log("movie theatres are",resArr);

                //  var movieTheatres=getMovieTheatresO();


                //callback(null, res);


                MongoConPool.find('movieHall', queryJson, function (err, movies) {
                    if (err) {
                        res.code = "401";
                        callback(null, res);
                    }
                    else {

                        resArr1 = [];
                        //        console.log("error------------------------------------------------------");
                        //      console.log(movies);
                        resArr1 = movies.map(function (file) {
                            var carsJSON = {};
                            // carsJSON.id = movie[i].ID;
                            var spl = file.HallID.split('|');
                            carsJSON.theatreName = spl[0];
                            carsJSON.theatreCity = spl[1];
                            carsJSON.theatreState = spl[2];
                            carsJSON.theatreZip = spl[3];
                            carsJSON.user = file.user;
                             carsJSON.movie = file.movie;
                            carsJSON.ScreenNo = file.ScreenNo;
                            carsJSON.Showtimes = file.Showtimes;
                            carsJSON.NoofSeats = file.NoofSeats;
                            carsJSON.TicketPrice = file.Price;
                            carsJSON.user = file.user;
                            carsJSON.ID = file.ID;
                            carsJSON.Date = file.Date;


                            //carsJSON.Company=cars[i].Company;
                            i = i + 1;
                            return carsJSON;
                        });
                        var resmap1 = groupBy(resArr1, "theatreName");
                        //  console.log("---------------------------------------------------=========================-------------")
                        //    console.log(resmap1);

                        res.code = 200;
                        //res.movietheatre = resArr1;
                        res.movietheatre = resmap1;
                        //console.log("movie theatres are",resArr1);
                        callback(null, res);
                    }
                });
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
function handle_getMovieListing(msg, callback) {

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});

    var res = {};
    var i = 0;
    try {

        console.log("msg is----handle_getMovieListing=----------------------------------------------------", parseInt(msg.reqBody.id));
        var queryJson = {
            //  "Date": {$gte : new Date()}

            //hard code
           // "ID": new RegExp("|"),"user":"pranithkouda@gmail.com"
            "ID":parseInt(msg.reqBody.id)
        };




        MongoConPool.find('movieHall', queryJson, function (err, movie) {
            if (err) {
                //      console.log("error------------------------------------------------------");
                res.code = "403";
                callback(null, res);
            }
            else {
                var movies = [];
                //   console.log("found movie names");
                resArr = [];
              console.log(movie);
                res.code = 200;
                // res.movietheatre = resArr;
               res.moviemap = movie;

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


function handle_saveMovieListing(msg, callback) {

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});
      console.log("-----------------------------------------in handle_saveMovieListing--",msg);
    var showtimes = [];
    for (let i = 0; i < msg.reqBody.showTimes.length; i++) {
        var showSeats = {};
        showSeats[msg.reqBody.showTimes[i]] = msg.reqBody.noOfSeats;
        showtimes.push(showSeats);
    }
console.log(showtimes);

    // console.log(showtimes, "--------------------------------------");
    var res = {};
    var i = 0;


    var d = new Date();
    var arrayDates =[];
    var queryJsonArray=[];


    console.log(arrayDates);
  //  for (let i = 0; i < 6; i++)

    {

        //console.log(d,"??????????????????????????????????????????????????????????????????????????????????");
        var queryJsonInsert = {
            $set:{
                // "_id":parseInt(randomInt(9,1000000))
                "Showtimes": showtimes,
                "NoofSeats": msg.reqBody.noOfSeats,
                "TicketPrice": 10,
            }

        };

     //   queryJsonArray.push(queryJson);

    }
   // console.log(queryJsonArray);
    {
        // console.log(msg.reqBody,"????????????????????????????????????????????????????");
        try {

            //  console.log("msg is-----------------------------------------------");


            var queryJsonSearch = {
                "ID": parseInt(msg.reqBody.ID)
            }


            console.log(msg.reqBody);

                MongoConPool.updateOne('movieHall', queryJsonSearch, queryJsonInsert, function (err, movie) {
                    if (err) {
                        res.code = "401";
                        callback(null, res);
                        //  console.log("into error===============================================", err)
                    }
                    else {
                        // if (movie == null)
                        {
                            console.log("????????????????????????????????????????",movie);
                            res.code=200;
                            callback(null,res);
                        }


                    }

                });

        }


        catch
            (e) {
            res.code = "401";
            callback(null, res);
        }
    }



    // winston.remove(winston.transports.File);
    // winston.add(winston.transports.Console);
}






exports.handle_request = handle_request;
exports.handle_MoviesnHalls = handle_MoviesnHalls;
exports.handle_addMovies = handle_addMovies;
exports.handle_getMovieListing=handle_getMovieListing;
exports.handle_saveMovieListing=handle_saveMovieListing;