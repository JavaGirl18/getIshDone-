const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema ({
    name: String,
    email: String,
    role: String,
    projects:[ProjectSchema]
})


const UsersModel = mongoose.model('Users', UsersSchema)

module.exports = { UsersModel }  