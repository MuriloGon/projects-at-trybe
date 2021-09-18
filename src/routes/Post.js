const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router({ mergeParams: true });

router.post('/', 
middlewares.auth.authUser, 
middlewares.post.validatePost,
controllers.Post.postPost);

router.get('/', 
middlewares.auth.authUser, 
controllers.Post.getPosts);

router.get('/search', 
middlewares.auth.authUser,
controllers.Post.searchQuery);

router.get('/:id', 
middlewares.auth.authUser, 
controllers.Post.getPostById);

router.put('/:id', 
middlewares.auth.authUser,
middlewares.post.validateEditPostBody,
middlewares.post.isPostOwner,
controllers.Post.updatePostById);

router.delete('/:id', 
middlewares.auth.authUser,
middlewares.post.isPostOwner,
controllers.Post.deletePostById);

module.exports = router;