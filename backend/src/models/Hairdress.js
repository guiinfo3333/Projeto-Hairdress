const { Model,DataTypes } = require('sequelize');

class Hairdress extends Model{
	static init(sequelize){
		super.init({
			name : DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			city: DataTypes.STRING,
			uf: DataTypes.STRING,
			address: DataTypes.STRING,
		},{
			sequelize,
			tableName: 'hairdress',
		})
	}

	static associate(models){
		this.hasMany(models.Service,{ foreignKey:'hairdress_id',as: 'services'});
		this.belongsToMany(models.Service,{ foreignKey:'hairdress_id',through:'markedcare',as: 'hairdress1'});
		this.belongsToMany(models.User,{ foreignKey:'user_id',through:'markedcare',as: 'hairdress2'});
	}

} 


module.exports = Hairdress;