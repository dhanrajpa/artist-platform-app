const userContoller = require('../controllers/userController');
const eventContoller = require('../controllers/eventController');

const router = require('express').Router();

router.post('/addevent', eventContoller.addEvent);
router.get('/getEvent',eventContoller.getEvent)

module.exports = router;
