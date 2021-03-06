require('strong-agent').profile();
var express = require('express');
var debug = require('debug')('partner');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bugsnag = require('bugsnag');
bugsnag.register(process.env.bugsnag);

var routes = require('./routes/index');

var app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
if (app.get('env') !== 'development') {
  app.enable('view cache');
}
app.enable('trust proxy');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bugsnag.requestHandler);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(session({
  store: new RedisStore({
    host:process.env.redis,
    port:6379,
    pass:''
  }),
  secret: process.env.SECRET,
  cookie: {
    maxAge: 31536000000,
    secure: true
  },
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bugsnag.errorHandler);

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = app.listen(app.get('port'), function() {
               debug('Express server listening on port ' + server.address().port);
             });
