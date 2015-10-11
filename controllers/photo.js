var models  = require('../models');

exports.getAll = function(req, res, next) {
    var Photo = models.Photo;
    Photo.findAll().then(function(users) {
        res.json(users);
    })
};