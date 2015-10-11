exports.photo = require('./photo');

exports.render = function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
};