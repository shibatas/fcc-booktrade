const User = require('../model/users');

const createUser = function(req, res) {
   console.log('register new user', req.body);
   User.find({ username: req.body.username }, function(err, user) {
       if (err) throw err;
       if (user.length > 0) {
           res.send('User already exists');
       } else {
           let newUser = new User(req.body);
           newUser.save(function(err) {
               if (err) throw err;
               res.send('new user created');
           });       
       }
   })
}

const getUser = function(req, res) {
    const id = req.params.userId;
    console.log('getUser', id);
    if (id) {
        User.findById(id, function(err, user) {
            if (err) throw err;
            const userFiltered = Object.assign({}, user._doc);
            delete userFiltered.password;
            res.send(userFiltered);
        });
    } else {
        res.send('please provide a user ID');
    }
} 

const updateUser = function(req, res) {
    const data = req.body;
    if (data._id) {
        // find and update User Schema
        User.findOne({ _id: data._id }, function(err, user) {
            if (err) throw err;
            if (!user) {
                res.send('user not found');
            } else {
                user = Object.assign(user, data);
                user.save();
                console.log('user updated', user);
                res.send('user ' + user.username + ' updated');
            }
        });
    } 
}

module.exports = {
    createUser: createUser,
    getUser: getUser,
    updateUser: updateUser    
}