const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const validationSignup = require('../middlewares/validationSignup')
const validationLogin = require('../middlewares/validationLogin')


router.post('/signup', validationSignup, userCtrl.signup);
router.post('/login', validationLogin, userCtrl.login);



module.exports = router;