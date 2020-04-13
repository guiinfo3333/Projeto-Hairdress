const { Model,DataTypes } = require('sequelize');

class Service extends Model{
	static init(sequelize){
		super.init({
			name : DataTypes.STRING,
			value: DataTypes.STRING,
			detaill: DataTypes.STRING,
		},{
			sequelize
		})
	}


	static associate(models){
		this.belongsTo(models.Hairdress,{ foreignKey:'hairdress_id',as: 'hairdress'});
		this.belongsToMany(models.Hairdress,{ foreignKey:'hairdress_id:',through:'markedcare',as: 'service1'});
		this.belongsToMany(models.User,{ foreignKey:'user_id:',through:'markedcare',as: 'service2'});

} 
}

module.exports = Service;