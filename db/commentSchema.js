const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommentSchema = new Schema ({
    description: String
})


const CommentModel = mongoose.model('Comments', CommentSchema)

module.exports = { CommentModel } 