const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();

router.post('/',
  middlewares.validateLogin,
  middlewares.authorizateEmailUser,
  controllers.Login.postLogin);

module.exports = router;