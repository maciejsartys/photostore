var express = require('express');
var router = express.Router();
var controllers = require("../controllers");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', controllers.user.logIn);

router.post('/register', controllers.user.register);

module.exports = router;
