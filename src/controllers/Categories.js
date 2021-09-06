const { Category } = require('../../models');

async function postCategory(req, res) {
  const { name } = req.body;
  const newCategory = await Category.create({ name });
  res.status(201).json(newCategory);
}

async function getCategories(req, res) {
  const categories = await Category.findAll();
  res.status(200).json(categories);
}

module.exports = {
  postCategory,
  getCategories,
};