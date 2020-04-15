'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('users', {
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
       },
       nameuser: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       emailuser: {
        type: Sequelize.STRING,
        allowNull: false
       },
       password: {
        type: Sequelize.STRING,
        allowNull: false
       },
       city: {
        type: Sequelize.STRING,
        allowNull: false
       },
       uf: {
        type: Sequelize.STRING,
        allowNull: false
       },
       created_at: {
        type:Sequelize.DATE,
        allowNull:false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
       }

      });
  
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable('users');
  }
};
