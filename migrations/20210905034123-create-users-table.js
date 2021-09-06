'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayName: Sequelize.STRING,
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      password: Sequelize.STRING,
      image: {
        type: Sequelize.STRING,
        defaultValue: 'null'
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Users');
  }
};
