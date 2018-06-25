const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TasksSchema = new Schema({
    description:String,
    status:String,
    dueDate: Date,
    comments:[comments]
})


const TasksModel = mongoose.model('Creature', TasksSchema)

module.exports = { TasksModel }  