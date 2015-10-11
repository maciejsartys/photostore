var express = require('express');
var router = express.Router();
var controllers = require('../controllers');
var models = require('../models');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', controllers.render);

module.exports = router;
