var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require('moment-timezone');
var bodyParser = require('body-parser');

var webhookRouter = require('./routes/webhook');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

logger.token('date', (req, res, tz) => {
  return moment().tz(tz).format();
})
app.use(logger(':remote-addr - :remote-user [:date[Asia/Ho_Chi_Minh]] ":method :url HTTP/:http-version" :status  - :response-time ms'));
app.use('/api/webhook', webhookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return res.status(404).send({"message": "Router not found"})
  next()
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
    "error_message": "Something broke !"
  })
});

module.exports = app;
