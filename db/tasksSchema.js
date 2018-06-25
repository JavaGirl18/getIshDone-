const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require('./commentSchema')

const TasksSchema = new Schema({
    description:String,
    status:String,
    startDue: Date,
    dueDate: Date
    // comments:[commentSchema.schema]
})


const TasksModel = mongoose.model('Tasks', TasksSchema)

module.exports = { TasksModel }  