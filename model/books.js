'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    subject: [String],
    offeredBy: [String]
});

module.exports = mongoose.model('Book', BooksSchema);