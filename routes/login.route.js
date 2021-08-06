const { Router } = require('express');
const loginPost = require('../controllers/login.controller');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const route = Router();

route.use(validateEmail);
route.use(validatePassword);

route.post('/', loginPost);

module.exports = route;