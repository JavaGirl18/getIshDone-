var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/users/:id', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/projects/:id', projectsRouter);
app.use('/api/projects/:id/tasks', taskRouter);
app.use('/api/projects/:id/tasks/:id/comments', commentsRouter);

module.exports = app;
