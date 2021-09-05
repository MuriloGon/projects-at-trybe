'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Categories', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
       },
       name: Sequelize.STRING 
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Categories');
  }
};
