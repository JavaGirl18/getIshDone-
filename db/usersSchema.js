const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema ({
    name: String,
    email: String,
    role: String,
    projects:[ProjectsSchema]
})


const UsersModel = mongoose.model('User', UsersSchema)

module.exports = { UsersModel }  