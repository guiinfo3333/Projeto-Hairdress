'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('services', {
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
       },
        nameserv: {
          type: Sequelize.STRING,
          allowNull: false,
       },

       value: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       hairdress_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {model:'hairdress',key:'id'},
            onUpdate : 'CASCADE',
            onDelete : 'CASCADE'
       },
       detaill: {
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
     return queryInterface.dropTable('services');
  }
};
