const commentsController = require('../controllers/artistController');

const router = require('express').Router();


router.post('/postComment/:postId', commentsController.verify, commentsController.addComment);
router.delete('/deleteComment/:commentID', commentsController.verify, commentsController.delComment);
router.put('/editComment/:commentID', commentsController.verify, commentsController.editComment);

module.exports = router;
