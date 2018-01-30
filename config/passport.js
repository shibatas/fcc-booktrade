const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/users');

const passportLocal = function(passport) {
    passport.use(new LocalStrategy(function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
           if (err) { return done(err); }
           
           if (!user) {
               return done(null, false, { message: 'Username not found' });
           }
           
           if (user.password !== password) {
               return done(null, false, { message: 'Incorrect password' });
           }
           
           return done(null, user);
        });
    }));
    
    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
}


module.exports = passportLocal;