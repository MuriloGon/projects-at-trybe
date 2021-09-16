/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 function PostCategory(sequelize, DataTypes) {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategoryModel.associate = (models) => {
    PostCategoryModel.belongsTo(models.BlogPost);
  };

  return PostCategoryModel;
}

module.exports = PostCategory;