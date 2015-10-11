var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/', controllers.photo.getAll);

module.exports = router;