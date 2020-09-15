const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');
const { route } = require('./pizza-routes');

// set up POST at /api/comments/:pizzaId
router
  .route('/:pizzaId')
  .post(addComment);

// set up DELETE at /api/:pizzaId/:commentId
router  
  .route('/:pizzaId/:commentId')
  .delete(removeComment);

module.exports = router;

