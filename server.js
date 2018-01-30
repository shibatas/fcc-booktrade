const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const routes = require('./config/routes');

require('dotenv').load();

require('./config/passport')(passport);

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('MongoDB connected') });

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ 
    secret: 'somanybooks',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/*', function(req, res, next) {
    console.log('auth status', req.isAuthenticated(), req.user);
    next();
});

routes(app, passport);

const listener = app.listen(process.env.PORT || 3000, function() {
    console.log(`server listening on port ${ listener.address().port }`)
});