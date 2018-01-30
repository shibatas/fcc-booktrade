const path = require('path');
const express = require('express');
const User = require('../lib/users');
const Book = require('../lib/books');

module.exports = function (app, passport) {
        
    app.route('/')
        .get(express.static(path.resolve('doc')));

    app.route('/login')
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/'
        }));
        
    app.route('/books')
        .get(Book.getBooks);
    
    app.route('/books/new')
        .post(Book.newBook);
    
    app.route('/books/:bookId')
        .get(Book.getOneBook)
        .post(Book.updateBook);
        
    app.route('/users')
        .post(User.updateUser);
    
    app.route('/users/new')
        .post(User.createUser);
    
    app.route('/users/:userId')
        .get(User.getUser);
   
}