/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
function Category(sequelize, DataTypes) {
  const CategoryModel = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  // CategoryModel.associate = (models) => {
  //   CategoryModel.belongsToMany(models.BlogPost, {
  //     through: 'PostsCategories',
  //   });
  // };

  return CategoryModel;
}

module.exports = Category;