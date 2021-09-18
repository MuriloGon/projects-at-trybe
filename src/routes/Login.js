const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const router = Router();

router.post('/',
  middlewares.login.validateLogin,
  middlewares.login.validateUniqueEmail,
  controllers.Login.postLogin);

module.exports = router;