const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectsSchema = new Schema({
    projectName: String,
    description: String,
    startDate: Date,
    endDate: Date,
    tasks:[TasksSchema],
    teamMembers:[UsersSchema]
})

const ProjectsModel = mongoose.model('Creature', ProjectsSchema)

module.exports = { ProjectModel } 