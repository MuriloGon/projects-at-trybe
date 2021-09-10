const { Router } = require('express');
const { talkerGetAll, talkerGetById, talkerPost,
 talkerPutById, talkerDeleteById, talkerQuerySeach } = require('../controllers/talker.controller');
const { talkerPostValidation, tokenValidation } = require('../middlewares/talkerValidators'); 

const route = Router();

route.get('/', talkerGetAll);
route.get('/:id(\\d+)', talkerGetById);

route.use(tokenValidation);
route.get('/search', talkerQuerySeach);
route.post('/', ...talkerPostValidation, talkerPost);
route.put('/:id', talkerPostValidation, talkerPutById);
route.delete('/:id', talkerDeleteById);

module.exports = route;