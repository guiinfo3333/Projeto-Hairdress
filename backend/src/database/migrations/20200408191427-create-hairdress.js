'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hairdress', {
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
       },
       namehair: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       emailhair: {
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
       address: {
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
       return queryInterface.dropTable('hairdress');
  }
};
