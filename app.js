require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects')
var taskRouter = require('./routes/tasks')
var commentsRouter = require('./routes/comments')

var app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI); 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(`${__dirname}/client/build`))

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/users/:userId/projects', projectsRouter);
app.use('/api/users/:userId/projects/:projectId/tasks', taskRouter);
app.use('/api/users/:userId/projects/:projectId/tasks/:tasksId/comments', commentsRouter);




app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })
module.exports = app;
