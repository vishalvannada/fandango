//const mongo = require('./mongo');
//const url = 'mongodb://localhost:27017/fl';
//const url = 'mongodb://mandipgohil:mjgohil@ds155160.mlab.com:55160/fl';
var mongo = require("../mongo");
var MongoConPool = require("../mongoConnPool");
var mongoURL = 'mongodb://cmpe273:sreedevi@ds149613.mlab.com:49613/fandango';

function check_request(msg, callback){
    var res = {};
    console.log("In check_request:"+ JSON.stringify(msg));

    mongo.connect(mongoURL, (db) => {
      console.log("callback from mongo-->"+db);
      var trackuser =[];
      var track = [];
      //Tracking of User
      var collection = db.collection('usertrack');
      collection.find( {status:"close"} ).toArray(function(err, docs) {
        console.log("User Tacking ----->"+JSON.stringify(docs));

        var i=0,j=0,k=0;
        var doclen = docs.length;
        for(k=0;k<doclen;k++){
          trackuser[k] = docs[k].username;
          track[k] = docs[k].pages;
        }
        console.log("trackuser ----->"+JSON.stringify(track));
      });//Track user temp
      //Page click counts to find area that less seen
      var collection = db.collection('pageclicks');
      collection.find( {} ).sort({count:1}).limit(5).toArray(function(err, docs) {
        console.log("sort page click ----->"+JSON.stringify(docs));
        var pageslessseen = [], lesscount = [];
        var i=0;
        var len = docs.length;
        for(i=0;i<len;i++){
          pageslessseen[i] = docs[i].pagename;
          lesscount[i] = docs[i].count;
        }
        // console.log("pageslessseen --->" + JSON.stringify(pageslessseen));
        // console.log("lesscount --->" + JSON.stringify(lesscount));

        //Movie Click counts
        var collection = db.collection('movieclicks');
        collection.find( {} ).toArray(function(err, docs) {
            var movieclick = [], mcount = [];
            var i=0;
            var len = docs.length;
            for(i=0;i<len;i++){
              movieclick[i] = docs[i].moviename;
              mcount[i] = docs[i].count;
            }
            // console.log("Movies --->" + JSON.stringify(movieclick));
            // console.log("count --->" + JSON.stringify(mcount));

            //Page click counts
            var collection = db.collection('pageclicks');
            collection.find( {} ).toArray(function(err, docs) {
              //console.log("clicks --->"+JSON.stringify(docs));
              var pages = [], count = [];
              var i=0;
              var len = docs.length;
              for(i=0;i<len;i++){
                pages[i] = docs[i].pagename;
                count[i] = docs[i].count;
              }
            //console.log("Pages --->" + JSON.stringify(pages));
            //console.log("count --->" + JSON.stringify(count));

            //Calculate the Movies with rating
            var collection = db.collection('movies');
            collection.find( {} ).toArray(function(err, docs) {
              //console.log("Result in Find---->"+JSON.stringify(docs[7].reviews));
              var doclen = docs.length;
              //console.log("len of docs --->"+doclen);
              var i=0,ts=0,j=0,c=0;
              var avg = [],movies = [];

              for(j=0;j<doclen;j++){
                var avgstar = 0;
                var review = docs[j].reviews;
                var len=review.length;
                ts=0;
                //console.log("\n review each ---->"+JSON.stringify(review));
                //console.log("review len  --->"+len);
                if(len === 0){
                  continue;
                } else {
                  for(i=0;i<len;i++){
                    ts += review[i].stars;
                  }
                  avgstar = Number(ts/len);
                  avg[c]=avgstar;
                  movies[c] = docs[j].title;
                  c=c+1;
                }
              }
              console.log("avg  starts movies -->"+avg);
              console.log("starts movies -->"+movies);

              collection.aggregate( [{$group : {_id : "title", total_movie : {$sum : 1}}}] ).toArray(function(err, docs) {
                 console.log("Result  -->" + JSON.stringify(docs));
                 if(docs.length>0) {
                       res.code = 200;
                       res.value = "Successfully count Movies";
                       res.total_movies = docs[0].total_movie;
                       res.avg = avg;
                       res.movies = movies;

                       res.pages = pages;//Pages that clicks
                       res.count = count;//count for Pages

                       res.movieclick = movieclick;//Movies that clicks
                       res.mcount = mcount;//count for Movie Click

                       res.pageslessseen = pageslessseen;//Movies that clicks
                       res.lesscount = lesscount;//count for Movie Click

                       res.trackuser = trackuser;
                       res.track = track;

                       callback(null, res);
                 } else {
                       res.code = 401;
                       res.value = "Your Graph API is not working";
                       res.email = msg.email;
                       callback(null, res);
                 }
               }); //Total movie count end
            }); //Movie rating graph end
          });//Page count end
        });//Movies Click count
      });//Find 5 Less seen Pages
    });
}
exports.check_request = check_request;
