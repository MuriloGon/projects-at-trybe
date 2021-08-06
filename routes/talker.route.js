const { Router } = require('express');
const { talkerGetAll } = require('../controllers/talker.controller');

const route = Router();

route.get('/', talkerGetAll);

module.exports = route;