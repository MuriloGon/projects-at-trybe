const { Router } = require('express');
const multer = require('multer');
const RecipesControllers = require('../../controllers/Recipes');
const Middlewares = require('../../middlewares');

const route = Router({ mergeParams: true });

route.get('/', 
  RecipesControllers.getRecipes);

route.get('/:id', 
  RecipesControllers.getRecipeById);
  
route.use(Middlewares.userAuthorization);

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, `${process.env.PWD}/src/uploads`); },
  filename: (req, file, cb) => { 
    const { id } = req.params;
    cb(null, `${id}.jpeg`); 
},
});
const upload = multer({ storage });
route.put('/:id/image', 
  upload.single('image'),
  RecipesControllers.putRecipeImage);
  
route.post('/',
  Middlewares.validateRecipesData,
  RecipesControllers.postRecipe);

route.put('/:id',
  Middlewares.validateRecipesData,
  Middlewares.canUserModify,
  RecipesControllers.putUpdateRecipe);

route.delete('/:id',
  Middlewares.canUserModify,
  RecipesControllers.deleteRecipe);

module.exports = route;