const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectsSchema = new Schema({
    owner:[UsersSchema],
    projectName: String,
    description: String,
    startDate: Date,
    endDate: Date,
    tasks:[TasksSchema],
    teamMembers:[{type:Schema.Types.ObjectId, ref: 'Users'}]
})

const ProjectsModel = mongoose.model('Projects', ProjectsSchema)

module.exports = { ProjectsModel } 