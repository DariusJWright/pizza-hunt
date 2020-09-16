const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');
const { route } = require('./pizza-routes');

// set up POST at /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

// set up DELETE at /api/:pizzaId/:commentId
router  
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

router
  .route('/:pizzaId/:commentId/:replyId')
  .delete(removeReply);

module.exports = router;

