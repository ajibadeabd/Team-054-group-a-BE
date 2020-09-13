var express = require('express');
var router = express.Router();
var userCntrl = require('../controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login', userCntrl.login);
// router.post('/register', userCntrl.register);

module.exports = router;
