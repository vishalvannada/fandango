var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('client-sessions');

var passport = require('passport');
require('./routes/passport')(passport);

var index = require('./routes/vishal/index');
var movies = require('./routes/vishal/movies');
var user = require('./routes/satish/users')


var mongoSessionURL = "mongodb://cmpe273:sreedevi@ds139929.mlab.com:39929/freelancer_lab2";
var expressSessions = require("express-session");
var MysqlStore = require('express-mysql-session')(expressSessions);


var app = express();


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// app.use(session({
//     cookieName : 'session',
//     secret : 'CMPE273_Redux',
//     duration : 30 *60 *1000,
//     activeDuration : 20*60*1000
// }));

var options = {
    host: 'localhost',
    user: 'test',
    password: 'pass',
    database: 'fandango',
    port: 3306
};


app.use(expressSessions({
    secret: 'CMPE273_fandango',
    httpOnly: true,
    secure: false,
    maxAge: null,
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000,
    resave :false,
    store: new MysqlStore(options),
    saveUninitialized: false,
    unset: 'destroy'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', index); //vishal
app.use('/movies', movies); //vishal
app.use('/user',user);//satish

// catch 404 and forward to error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
