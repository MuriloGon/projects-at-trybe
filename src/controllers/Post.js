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
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  res.status(200).json(posts);
}

module.exports = {
  postPost,
  getPosts,
};