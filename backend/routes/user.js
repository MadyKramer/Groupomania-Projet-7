const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const validationSignup = require('../middlewares/validationSignup')
const validationLogin = require('../middlewares/validationLogin')


router.post('/signup',/*(req, res, next) => {console.log(req.body); next()},*/ validationSignup, userCtrl.signup);
router.post('/login', validationLogin, userCtrl.login);



module.exports = router;