const { Category } = require('../../models');
const schemas = require('../schemas');

async function validatePost(req, res, next) {
  const postInfo = req.body;
  const { valid, message } = schemas.Post.validatePost(postInfo);
  if (!valid) return res.status(400).json({ message });
  const { categoryIds } = postInfo;
  const uniqueIds = [...new Set(categoryIds)];
  if (uniqueIds.length !== categoryIds.length) {
    return res.status(400).json({ message: 'categoryIds must be unique' });
  }
  const respostaPromises = categoryIds.map(async (num) => Category.findByPk(num));
  const respostas = await Promise.all(respostaPromises);
  const validateIds = respostas.some((x) => x === null);
  if (validateIds) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
}

module.exports = { 
  validatePost,
};