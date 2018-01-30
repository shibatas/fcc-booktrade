const User = require('../lib/users');
const Book = require('../lib/books');

module.exports = function (app, passport) {
    app.route('/')
        .get(function(req, res) {
            console.log(req.query);
            res.send('api root get');
        })
        .post(function(req, res) {
            console.log(req.body);
            res.send('api post');
        });
        
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