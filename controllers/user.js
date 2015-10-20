var models = require('../models');
var passport = require("passport");

exports.logIn = function(req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }

    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            return res.json({
                token: user.generateJWT()
            });
        }
        else {
            return res.status(401).json(info);
        }
    })(req, res, next);
};

exports.register = function(req, res, next) {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }

    var user = models.User.build(req.body);
    console.log(req.body);
    user.setPassword(req.body.password);

    user.save().then(function(user) {
        return res.json({
            token: user.generateJWT()
        });
    });
};


exports.getAll = function(req, res, next) {
    var User = models.User;
    User.findAll().then(function(users){
        res.json(users);
    })
}