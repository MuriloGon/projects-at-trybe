const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();

router.post('/', 
middlewares.auth.authUser, 
middlewares.post.validatePost,
controllers.Post.postPost);

router.get('/', 
middlewares.auth.authUser, 
controllers.Post.getPosts);

router.get('/:id', 
middlewares.auth.authUser, 
controllers.Post.getPostById);

module.exports = router;