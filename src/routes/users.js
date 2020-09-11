const express = require('express');
const router = express.Router();
const userCntr = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//route for user to register
router.post('/signUp',userCntr.register);
//route for user to login
router.post('/signIn', userCntr.login);

module.exports = router;
