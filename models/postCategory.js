/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
function PostCategory(sequelize, _DataTypes) {
  const PostCategoryModel = sequelize.define('PostCategory', { }, {
    timestamps: false, tableName: 'PostsCategories' });
  PostCategoryModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategoryModel;
}

module.exports = PostCategory;