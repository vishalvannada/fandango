var connection =  new require('./kafka/Connection');

var dummyData = require('./services/dummyData');
var getMoviesInHomePageCarousel = require('./services/getMoviesInHomePageCarousel');
var getMovieOverview = require('./services/getMovieOverview');
var getMoviesSeacrhHandle = require('./services/getMoviesSearchHandle');

var topic_name1 = 'loadDataFromAPI_topic';
var consumer1 = connection.getConsumer(topic_name1);

var topic_name2 = 'getMoviesInHomePageCarousel_topic';
var consumer2 = connection.getConsumer(topic_name2);

var topic_name3 = 'getMovieOverview_topic';
var consumer3 = connection.getConsumer(topic_name3);
var consumerPranith1 = connection.getConsumer('getMoviesInSearchPage_topic');
var consumerPranith2 = connection.getConsumer('getMoviesnHalls_topic');
var consumerPranith3 = connection.getConsumer('addmovies_topic');
var consumerPranith4 = connection.getConsumer('getMoviesHallLisiting_topic');
var consumerPranith5 = connection.getConsumer('saveMovieListing_topic');




var producer = connection.getProducer();


consumer1.on('message', function (message) {
    console.log('message received');
    console.log(message)
    console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    console.log(data)
    dummyData.handle_request(data.data, function(err,res){
        console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});



consumer2.on('message', function (message) {
    console.log('message received');
    console.log(message)
    console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    console.log(data)
    getMoviesInHomePageCarousel.handle_request(data.data, function(err,res){
        console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});


consumer3.on('message', function (message) {
    console.log('message received');
    console.log(message)
    console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    console.log(data)
    getMovieOverview.handle_request(data.data, function(err,res){
        console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});
//Pranith
consumerPranith1.on('message', function (message) {
    console.log('message received');
    console.log(message)
    console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    console.log(data)
    getMoviesSeacrhHandle.handle_request(data.data, function(err,res){
        console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});

consumerPranith2.on('message', function (message) {
    console.log('message received');
    console.log(message)
    console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    console.log(data)
    getMoviesSeacrhHandle.handle_MoviesnHalls("test", function(err,res){
        console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});
consumerPranith3.on('message', function (message) {
    console.log('message received');
    //console.log(message)
    //console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    //console.log(data)
  //  console.log("=================================");
    getMoviesSeacrhHandle.handle_addMovies(data.data, function(err,res){
       // console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});
consumerPranith4.on('message', function (message) {
    console.log('message received');
    //console.log(message)
    //console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    //console.log(data)
    //  console.log("=================================");
    getMoviesSeacrhHandle.handle_getMovieListing(data.data, function(err,res){
        // console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});
consumerPranith5.on('message', function (message) {
    console.log('message received');
    //console.log(message)
    //console.log(JSON.parse(message.value));
    var data = JSON.parse(message.value);
    //console.log(data)
    //  console.log("=================================");
    getMoviesSeacrhHandle.handle_saveMovieListing(data.data, function(err,res){
        // console.log('after handle',res, err);
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
            console.log('producer',data);
        });
        return;
    });
});


