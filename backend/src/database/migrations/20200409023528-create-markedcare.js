'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable('markedcare', {
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
       },
       hairdress_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {model:'hairdress',key:'id'},
            onUpdate : 'CASCADE',
            onDelete : 'CASCADE'
       },
           service_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {model:'services',key:'id'},
            onUpdate : 'CASCADE',
            onDelete : 'CASCADE'
       },
        user_id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            references: {model:'users',key:'id'},
            onUpdate : 'CASCADE',
            onDelete : 'CASCADE'
       },
       DATE: {
          type: Sequelize.DATE,
          primaryKey: true,
          allowNull:false,
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
     return queryInterface.dropTable('markedcare');
  }
};
