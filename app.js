const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const employees = require('./api/employees');
const classes = require('./api/classes');
const frequency = require('./api/frequency');
const instructors = require('./api/instructors');
const plants = require('./api/plants');
const score = require('./api/score');
const training = require('./api/training');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/employees', employees);
app.use('/api/v1/classes', classes);
app.use('/api/v1/frequency', frequency);
app.use('/api/v1/instructors', instructors);
app.use('/api/v1/plants', plants);
app.use('/api/v1/score', score);
app.use('/api/v1/training', training);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

module.exports = app;
