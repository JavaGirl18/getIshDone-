var express = require('express');

const router = express.Router({mergeParams: true})
const User = require('../db/usersSchema')
const Projects = require('../db/projectSchema')

module.exports = router;
