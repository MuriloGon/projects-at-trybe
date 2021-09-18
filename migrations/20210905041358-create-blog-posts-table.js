'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('BlogPosts', { 
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
       },
       title: Sequelize.STRING,
       content: Sequelize.TEXT,
       userId: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'Users',
           key: 'id'
         },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
       },
       published: {
         type: Sequelize.DATE,
         defaultValue: Sequelize.NOW,
       },
       updated: {
         type: Sequelize.DATE,
         defaultValue: Sequelize.NOW,
         onUpdate: 'SET DEFAULT'
       }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('BlogPosts');
  }
};
