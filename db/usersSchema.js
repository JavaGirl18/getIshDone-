const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ProjectsModel} = require ('./projectSchema')

const UsersSchema = new Schema ({
    name: String,
    email: String,
    role: String,
    projects:[ProjectsModel.schema]
})


const UsersModel = mongoose.model('Users', UsersSchema)

module.exports = { UsersModel }  