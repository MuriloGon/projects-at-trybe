function validateRecipesData(ingredients, name, preparation) {
  if (!ingredients || !name || !preparation) return false;
  return true;
}

module.exports = {
  validateRecipesData,
};