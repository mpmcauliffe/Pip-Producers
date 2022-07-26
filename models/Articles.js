
const mongoose    = require('mongoose')


const ArticleSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    date: {
        type: Date,
    },
    picture: {
        type: String,
    },
    content: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
}) 


module.exports = Article = mongoose.model('article', ArticleSchema)
