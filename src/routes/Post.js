const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();

router.post('/', 
middlewares.authUser, 
middlewares.validatePostPost,
controllers.Post.postPost);

module.exports = router;