var connection =  new require('./kafka/Connection');

var dummyData = require('./services/dummyData');
var getMoviesInHomePageCarousel = require('./services/getMoviesInHomePageCarousel');
var getMovieOverview = require('./services/getMovieOverview');
var user = require('./services/satish/user');

var producer = connection.getProducer();
var consumer = connection.getConsumer();



console.log('server is running');

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

consumer.on('message', function (message) {
    console.log('message received');
    console.log(message);
    console.log(JSON.stringify(message.value));

    var data = JSON.parse(message.value);


    switch (message.topic){
        case 'signup':
            user.signup(data.data, function (err, res) {
                response(data, res);
                return;
            });
            break;
        case 'signin':
            user.signin(data.data, function (err, res) {
                console.log("res: ",res);
                response(data, res);
                return;
            });
            break;
        case 'userDetails':
            user.userDetails(data.data, function (err, res) {
                console.log("res: ",res);
                response(data, res);
                return;
            });
            break;
        case 'loadDataFromAPI':
            dummyData.handle_request(data.data, function(err,res) {
                response(data, res);
                return;
            });
            break;
        case 'getMoviesInHomePageCarousel':
            getMoviesInHomePageCarousel.handle_request(data.data, function(err,res){
                response(data,res);
                return;
            })
            break;
        case 'getMovieOverview':
            getMovieOverview.handle_request(data.data, function(err,res){
                response(data,res);
                return;
            })
            break;
        case 'savePayment':
            user.savePayment(data.data, function (err, res) {
                console.log("res: ",res);
                response(data, res);
                return;
            });
            break;
        case 'deletePayment':
            user.deletePayment(data.data, function (err, res) {
                console.log("res: ",res);
                response(data, res);
                return;
            });
            break;
        case 'basicInfo':
            user.basicInfo(data.data, function(err,res) {
                response(data, res);
                return;
            });
            break;
        case 'changeEmail':
            user.changeEmail(data.data, function(err,res){
                response(data,res);
                return;
            })
            break;
        case 'changePassword':
            user.changePassword(data.data, function(err,res){
                response(data,res);
                return;
            })
            break
        case 'userDetails':
            user.userDetails(data.data, function(err,res){
                response(data,res);
                return;
            })
            break;
    }
});

function response(data, res) {
    var payloads = [
        { topic: data.replyTo,
            messages:JSON.stringify({
                correlationId:data.correlationId,
                data : res
            }),
            partition : 0
        }
    ];
    producer.send(payloads, function(err, data){
        console.log(data);
    });
}