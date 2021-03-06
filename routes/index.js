var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var models = require('../models');
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'SECRET_TOKEN',
    userProperty: 'payload'
});

/* GET home page. */
router.get('/', controllers.render);

/* photos */

/* users */

router.post('/users/register', controllers.user.register);

router.get('/users/all', controllers.user.getAll);

router.post('/users/login', controllers.user.logIn);

router.get('/users/jwt', function(req, res ,next) {
    var user = models.User.build({username: "test"});
    return res.json({jwt: user.generateJWT()});
});

router.get('/users/:username/private', auth, controllers.user.getPrivateData);
router.get('/users/:username/public', controllers.user.getPublicData);

require('./document')(router.stack, 'express');

module.exports = router;
