/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @return 
 */
function User(sequelize, DataTypes) {
  const UserModel = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      defaultValue: 'null',
    },
  }, {
    timestamps: false,
  });

  return UserModel;
}

module.exports = User;