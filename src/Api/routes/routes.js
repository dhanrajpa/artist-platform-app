const userContoller = require('../controllers/userController');
const artistContoller = require('../controllers/artistController');

const router = require('express').Router();

router.post('/userRegisteration', userContoller.addUser);
router.post('/artistRegisteration', artistContoller.addArtist);
router.post('/authenticateLogin', userContoller.authDetails);


module.exports = router;
