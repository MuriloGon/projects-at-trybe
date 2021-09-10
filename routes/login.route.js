const { Router } = require('express');
const loginPost = require('../controllers/login.controller');
const { validateEmail, validatePassword } = require('../middlewares/loginValidators');

const route = Router();

route.use(validateEmail);
route.use(validatePassword);

route.post('/', loginPost);

module.exports = route;