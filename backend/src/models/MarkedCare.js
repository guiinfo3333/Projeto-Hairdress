const { Model,DataTypes } = require('sequelize');

class MarkedCare extends Model{
	static init(sequelize){
		super.init({
			hairdress_id: DataTypes.INTEGER,
			service_id: DataTypes.INTEGER,
			user_id: DataTypes.INTEGER,
			date: DataTypes.DATE,
			
		},{
			sequelize,
			tableName: 'markedcare',
		})
	}

	static associate(models){
	   this.belongsTo(models.Hairdress, {foreignKey: 'hairdress_id'})
       this.belongsTo(models.Service, {foreignKey: 'service_id'})
       this.belongsTo(models.User, {foreignKey: 'user_id'})
	}
	

} 


module.exports = MarkedCare;