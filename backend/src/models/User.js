const { Model,DataTypes } = require('sequelize');

class User extends Model{
	static init(sequelize){
		super.init({
			name : DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			city: DataTypes.STRING,
			uf: DataTypes.STRING,
		},{
			sequelize
		})
	}

	static associate(models){
		this.belongsToMany(models.Service,{ foreignKey:'service_id',through:'markedcare',as: 'user1'});
		this.belongsToMany(models.Hairdress,{ foreignKey:'hairdress_id',through:'markedcare',as: 'user2'});
	}
} 


module.exports = User;