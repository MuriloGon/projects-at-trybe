/* eslint-disable max-lines-per-function */
/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 function BlogPost(sequelize, DataTypes) {
  const BlogPostModel = sequelize.define('BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
  }, {
    createdAt: false,
    updatedAt: false,
  });

  BlogPostModel.associate = (models) => {
    BlogPostModel.hasMany(models.Category, {
        foreignKey: 'id',
        as: 'categories',
      });
  };

  return BlogPostModel;
}

module.exports = BlogPost;