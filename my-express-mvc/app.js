require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//loadmongodb dbconnection
require('./app_server/models/db');
require("./app_server/configs/passport"); //load file config
// Harus Dipanggil setelah depedency utama yg lainnya ada

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
//Memanggil Mahasiswa
var mahasiswaRouter = require('./app_server/routes/mahasiswas');
var housingRouter = require('./app_server/routes/housing');
var registerRouter = require('./app_server/routes/register');

//var cors = require('cors');
var app = express();
//app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'ejs');

//Allow CORS 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
}),

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Tangani preflight request
}
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', mahasiswaRouter);
app.use('/housing', housingRouter);
app.use('/insert', registerRouter);


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
