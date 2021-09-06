/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
 function Category(sequelize, DataTypes) {
  const CategoryModel = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    createdAt: false,
    updatedAt: false,
  });

  return CategoryModel;
}

module.exports = Category;