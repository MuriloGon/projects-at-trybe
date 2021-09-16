const { BlogPost, PostCategory } = require('../../models');

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

module.exports = {
  postPost,
};