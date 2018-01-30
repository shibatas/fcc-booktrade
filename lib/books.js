const Book = require('../model/books');

const getBooks = function(req, res) {
    console.log('getBooks');
    Book.find({}, function(err, allBooks) {
        if (err) throw err;
        res.send(allBooks);
    });
} 

const newBook = function(req, res) {
    console.log('newBook', req.body);
    Book.find({ 
        title: req.body.title, 
        author: req.body.author 
    }, function(err, books) {
        if (err) throw err;
        
        if (books.length > 0) {
            res.send('Book already exists');
        } else {
            let newBook = new Book(req.body);
            newBook.save(function(err, book) {
                if (err) throw err;
                res.send('new book added');
            });     
        }
    });
}

const getOneBook = function(req, res) {
    console.log('get one book', req.params.bookId);
    Book.findById(req.params.bookId, function(err, book) {
        if (err) throw err;
        if (!book) {
            res.send('Book not found');
        } else {
            res.send(book);
        }
    })
}

const updateBook = function(req, res) {
    const data = req.body.data;
    console.log('addOrUpdate Books', data);
    /*if (data._id) {
        // find and update User Schema
        User.find({}, function(err, user) {
            if (err) throw err;
            if (!user) {
                res.send('user not found');
            } else {
                user.set(data);
                res.send('user updated');
            }
        });
    } else {
        // create new user
        newUser(data);
    }
    
    function newUser(data) {
        let newUser = new User(data);
        
        newUser.save(function(err, data) {
            if (err) throw err;
            console.log('new user created', data);
        })
    }*/
}

module.exports = {
    getBooks: getBooks,
    newBook: newBook,
    getOneBook: getOneBook,
    updateBook: updateBook    
}