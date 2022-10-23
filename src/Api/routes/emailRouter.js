const userContoller = require('../controllers/userController');
const emailContoller = require('../controllers/emailController');

const router = require('express').Router();

router.post('/quersent', emailContoller.emailRegister);

module.exports = router;
