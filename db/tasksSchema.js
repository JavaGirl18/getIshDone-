const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = require('./commentSchema')

const TasksSchema = new Schema({
    taskName: String,
    description:String,
    status:String,
    startDate: Date,
    dueDate: Date
    // comments:[commentSchema.schema]
})


const TasksModel = mongoose.model('Tasks', TasksSchema)

module.exports = { TasksModel }  