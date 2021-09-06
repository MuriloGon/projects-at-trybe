const schema = require('../schemas');

function validateCategoriesPost(req, res, next) {
  const { name } = req.body;
  const { valid, message } = schema.Categories.validateName(name);
  if (!valid) return res.status(400).json({ message });
  next();
}

module.exports = validateCategoriesPost;