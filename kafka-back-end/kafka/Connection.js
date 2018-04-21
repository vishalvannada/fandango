var kafka = require('kafka-node');

function ConnectionProvider() {
    this.getConsumer = function(topic_name) {

        this.client = new kafka.Client("localhost:2181");
        this.kafkaConsumerConnection = new kafka.Consumer(this.client,[
            { topic: 'signup', partition: 0 },
            {topic: 'signin',partition: 0},
            { topic: 'loadDataFromAPI_topic', partition: 0 },
            {topic: 'getMoviesInHomePageCarousel_topic',partition: 0},
            { topic: 'basicInfo', partition: 0 },
            { topic: 'changeEmail', partition: 0 },
            { topic: 'changePassword', partition: 0 },
            { topic: 'savePayment', partition: 0 },
        ]);
        this.client.on('ready', function () { console.log('client ready!') })

        return this.kafkaConsumerConnection;
    };

    //Code will be executed when we start Producer
    this.getProducer = function() {
        this.client = new kafka.Client("localhost:2181");
        var HighLevelProducer = kafka.HighLevelProducer;
        this.kafkaProducerConnection = new HighLevelProducer(this.client);
        //this.kafkaConnection = new kafka.Producer(this.client);
        console.log('producer ready');

        return this.kafkaProducerConnection;
    };
}
exports = module.exports = new ConnectionProvider;
