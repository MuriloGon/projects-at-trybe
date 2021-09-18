const { Category, BlogPost } = require('../../models');
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

async function isPostOwner(req, res, next) {
  const { id: postToEditId } = req.params;
  const { id: authUserId } = req.user;

  const user = await BlogPost.findOne({ where: { id: postToEditId } });

  if (user === null) return res.status(404).json({ message: 'Post does not exist' });
  if (authUserId !== user.userId) return res.status(401).json({ message: 'Unauthorized user' });

  next();
}

async function validateEditPostBody(req, res, next) {
  const { valid, message } = schemas.Post.validateEditBody(req.body);
  if (!valid) return res.status(400).json({ message });
  next();
}

module.exports = {
  validatePost,
  isPostOwner,
  validateEditPostBody,
};