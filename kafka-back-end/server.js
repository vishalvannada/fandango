var connection =  new require('./kafka/Connection');

var dummyData = require('./services/dummyData')

var topic_name1 = 'loadDataFromAPI_topic';
var consumer1 = connection.getConsumer(topic_name1);

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

