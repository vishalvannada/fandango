var mongo = require("./mongo");
var MongoConPool=require("./mongoConnPool");
// var mongoURL = "mongodb://localhost:27017/KAYAK";
// var winston = require('winston');

//winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
//winston.remove(winston.transports.Console);


function handle_request(msg, callback){

    // winston.remove(winston.transports.Console);
    // winston.add(winston.transports.File, { filename: './public/LogFiles/KayakAnalysis.json' });
    // winston.log('info', 'Flight Page Viewed', { page_name : 'Flights_page'});

    var res = {};
    var i=0;
    try {

        var queryJson={title: msg.title};

        MongoConPool.insert('movies',queryJson,function(err, flights){
            if (err) {
                res.code = "401";
                res.value = "Flights details fetch unsuccessful";
                callback(null, res);
            }
            else {
                console.log("mama", flights)
                callback(null, res);
            }
        });

    }
    catch (e){
        res.code = "401";
        res.value = "Flights details fetch unsuccessful";
        callback(null, res);
    }
    // winston.remove(winston.transports.File);
    // winston.add(winston.transports.Console);
}

exports.handle_request = handle_request;