const { Router } = require('express');
const { talkerGetAll, talkerGetById } = require('../controllers/talker.controller');

const route = Router();

route.get('/', talkerGetAll);

route.get('/:id', talkerGetById);

module.exports = route;