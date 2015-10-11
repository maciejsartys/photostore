var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');
var User = models.User;

passport.use(new LocalStrategy(
  function(username, password, done) {
      
    User.find({where:{ username: username }}).then(function (user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));