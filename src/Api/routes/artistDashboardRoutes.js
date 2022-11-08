const artistController = require('../controllers/artistController');
const dashboardController = require('../controllers/artistController');
const router = require('express').Router();

router.get('/getComments/:artistId', dashboardController.verify, dashboardController.getPostDetails);

module.exports = router;
