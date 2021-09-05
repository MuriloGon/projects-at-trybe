'use strict';

module.exports = {
  /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('PostsCategories', { 
       postId: {
        type: Sequelize.INTEGER,
         references: {
          model: 'BlogPosts',
          key: 'id',
         }
       },
       categoryId: {
         type: Sequelize.INTEGER,
         references: {
          model: 'Categories',
          key: 'id',
         }
       }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('PostsCategories');
  }
};
