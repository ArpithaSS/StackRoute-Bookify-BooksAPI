const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    isbn:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    publicationDate:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    language:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('BookModel', booksSchema, 'Books');
