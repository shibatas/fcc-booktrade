'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    password: String,
    displayname: String,
    fullName: String,
    city: String,
    state: String,
    zip: Number,
    country: String,
    email: String
});

module.exports = mongoose.model('User', UsersSchema);