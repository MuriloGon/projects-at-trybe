const { Router } = require('express');
const { talkerGetAll, talkerGetById, talkerPost } = require('../controllers/talker.controller');
const { talkerPostValidation, tokenValidation } = require('../middlewares/talkerValidators'); 

const route = Router();

route.get('/', talkerGetAll);
route.get('/:id', talkerGetById);

route.use(tokenValidation);
route.post('/', talkerPostValidation, talkerPost);

module.exports = route;