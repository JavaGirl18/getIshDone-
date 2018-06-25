const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {TasksModel} = require('./tasksSchema')

const ProjectsSchema = new Schema({
    projectName: String,
    description: String,
    startDate: Date,
    endDate: Date,
    tasks:[TasksModel.schema],
    teamMembers:[{type:Schema.Types.ObjectId, ref: 'Users'}]
})

const ProjectsModel = mongoose.model('Projects', ProjectsSchema)

module.exports = { ProjectsModel } 