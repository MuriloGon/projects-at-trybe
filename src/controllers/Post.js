const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../../models');

async function postPost(req, res) {
  const { categoryIds, title, content } = req.body;

  const { id: tokenUserID } = req.user;

  const newPost = await BlogPost.create({ title, content, userId: tokenUserID });

  const postCategoriesPromise = categoryIds.map(async (categoryId) => PostCategory.create({
    categoryId,
    postId: newPost.id,
  }));
  await Promise.all(postCategoriesPromise);

  res.status(201).json({
    id: newPost.id,
    userId: newPost.userId,
    title: newPost.title,
    content: newPost.content,
  });
}

async function getPosts(_req, res) {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  res.status(200).json(posts);
}

async function getPostById(req, res) {
  const { id } = req.params;
  const posts = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (posts === null) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(posts);
}

async function updatePostById(req, res) {
  const { title, content } = req.body;
  const { id } = req.params;
  const [affectedRows] = await BlogPost.update({ title, content }, { where: { id } });
  if (affectedRows < 1) {
    return res.status(500).json({ message: 'Cannot update post' });
  }
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  res.status(200).json(post);
}

async function deletePostById(req, res) {
  const { id } = req.params;
  const affectedRows = await BlogPost.destroy({ where: { id } });
  if (affectedRows < 1) {
    return res.status(500).json({ message: 'Cannot delete post' });
  }
  res.status(204).end();
}

async function searchQuery(req, res) {
  const { q } = req.query;

  if (q === '' || q === undefined) {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ] });
    return res.status(200).json(posts);
  }

  const posts = await BlogPost.findAll({ where: {
    [Op.or]: [
      { title: q },
      { content: q }],
   }, 
   include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  res.status(200).json(posts);
}

module.exports = {
  postPost,
  getPosts,
  getPostById,
  updatePostById,
  deletePostById,
  searchQuery,
};