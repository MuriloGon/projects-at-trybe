const { validateRecipesData } = require('../schemas/recipesValidations');

function validateRecipesPost(req, res, next) {
  const { ingredients, name, preparation } = req.body;
  const validation = validateRecipesData(ingredients, name, preparation);
  if (!validation) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  return next();
}

module.exports = validateRecipesPost;