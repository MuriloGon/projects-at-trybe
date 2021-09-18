/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 function BlogPost(sequelize, DataTypes) {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: { type: DataTypes.INTEGER },
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
    tableName: 'BlogPosts',
  });

  BlogPostModel.associate = (models) => {
    BlogPostModel.hasOne(models.User, {
      foreignKey: 'id',
      sourceKey: 'userId',
      as: 'user',
    });
  };

  return BlogPostModel;
}

module.exports = BlogPost;