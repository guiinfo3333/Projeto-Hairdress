const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);

class Smartquerys{
//continuar pra colocar agora pra pesquisar de acordo com cada cabelereira
	static selectsmartMarkedCare(){
       const  query= "select h.namehair,s.name,u.nameuser from markedcare m inner join services s on m.service_id = s.id inner join hairdress h on m.hairdress_id = h.id join users u on m.user_id= u.id ";
	   return sequelize.query(query);

	


	}

}
module.exports = Smartquerys;