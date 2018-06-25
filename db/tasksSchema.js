const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TasksSchema = new Schema({
    description:String,
    status:String,
    startDue: Date,
    dueDate: Date,
    comments:[comments]
})


const TasksModel = mongoose.model('Tasks', TasksSchema)

module.exports = { TasksModel }  