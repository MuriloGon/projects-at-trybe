/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 function PostCategory(sequelize, DataTypes) {
  const PostCategoryModel = sequelize.define('PostCategory', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  PostCategoryModel.associate = (models) => {
    PostCategoryModel.belongsTo(models.BlogPost);
  };

  return PostCategoryModel;
}

module.exports = PostCategory;