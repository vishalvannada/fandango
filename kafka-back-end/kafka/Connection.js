var kafka = require('kafka-node');

function ConnectionProvider() {
    this.getConsumer = function (topic_name) {

        this.client = new kafka.Client("localhost:2181");
        this.kafkaConsumerConnection = new kafka.Consumer(this.client, [
            //vishal
            {topic: 'loadDataFromAPI_topic', partition: 0},
            {topic: 'getMoviesInHomePageCarousel_topic', partition: 0},
            {topic: 'getMovieOverview_topic', partition: 0},
            {topic: 'saveReview_topic', partition: 0},
            {topic: 'getSearchedMoviesAdmin_topic', partition: 0},
            {topic: 'UpdateMovieAdmin_topic', partition: 0},

            //pranith
            {topic: 'getMoviesInSearchPage_topic', partition: 0},
            {topic: 'getMoviesnHalls_topic', partition: 0},
            {topic: 'addmovies_topic', partition: 0},
            {topic: 'saveMovieListing_topic', partition: 0},
            {topic: 'getMoviesHallLisiting_topic', partition: 0},
            {topic: 'geteditmoviesearch_topic', partition: 0},




            //satish
            {topic: 'signup', partition: 0},
            {topic: 'signin', partition: 0},
            {topic: 'moviehallsignin', partition: 0},
            {topic: 'adminsignin', partition: 0},

            {topic: 'basicInfo', partition: 0},
            {topic: 'changeEmail', partition: 0},
            {topic: 'changePassword', partition: 0},
            {topic: 'savePayment', partition: 0},
            {topic: 'userDetails', partition: 0},
            {topic: 'deletePayment', partition: 0},
            {topic: 'uploadimage', partition: 0}

        ]);
        this.client.on('ready', function () {
            console.log('client ready!')
        })

        return this.kafkaConsumerConnection;
    };

    //Code will be executed when we start Producer
    this.getProducer = function () {
        this.client = new kafka.Client("localhost:2181");
        var HighLevelProducer = kafka.HighLevelProducer;
        this.kafkaProducerConnection = new HighLevelProducer(this.client);
        //this.kafkaConnection = new kafka.Producer(this.client);
        console.log('producer ready');

        return this.kafkaProducerConnection;
    };
}

exports = module.exports = new ConnectionProvider;
