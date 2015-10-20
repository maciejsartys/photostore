exports.photo = require('./photo.js');
exports.user = require('./user.js');

exports.render = function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
};