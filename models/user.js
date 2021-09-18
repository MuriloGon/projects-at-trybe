/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
function User(sequelize, DataTypes) {
  const UserModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: 'null',
    },
  }, {
    timestamps: false,
    tableName: 'Users',
  });
  UserModel.associate = (models) => {
    UserModel.belongsTo(models.BlogPost, { foreignKey: 'id' });
  };

  return UserModel;
}

module.exports = User;