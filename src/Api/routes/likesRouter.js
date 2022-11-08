const likesController = require('../controllers/artistController');

const router = require('express').Router();

router.get('/getLikes/:postId', likesController.getLikes);
router.post('/updateLikes/:postId', likesController.verify, likesController.addLikes);

module.exports = router;
