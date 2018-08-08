var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware'); // ADD THIS
var browserify = require('browserify-middleware'); //ADD THIS

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//ADD THIS SECTION
app.use(
    sassMiddleware({
        src: __dirname + '/sass',
        dest: __dirname + '/public',
        debug: true,
    })
);
//Browser
app.get('/javascripts/bundle.js', browserify('./client/script.js'));
if (app.get('env') == 'development') {
    var browserSync = require('browser-sync');
    var config = {
        files: ["public/**/*.{js,css}", "client/*.js", "sass/**/*.scss", "views/**/*.hbs"],
        logLevel: 'debug',
        logSnippet: false,
        reloadDelay: 3000,
        reloadOnRestart: true
    };
    var bs = browserSync(config);
    app.use(require('connect-browser-sync')(bs));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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