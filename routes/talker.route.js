const { Router } = require('express');
const { talkerGetAll, talkerGetById, talkerPost } = require('../controllers/talker.controller');
const postTalkerValidators = require('../middlewares/addTalkerValidators'); 

const route = Router();

route.get('/', talkerGetAll);

route.post('/', postTalkerValidators, talkerPost);

route.get('/:id', talkerGetById);

module.exports = route;