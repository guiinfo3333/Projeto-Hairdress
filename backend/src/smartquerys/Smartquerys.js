const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const sequelize = new Sequelize(dbConfig);

class Smartquerys{
//continuar pra colocar agora pra pesquisar de acordo com cada cabelereira
	static selectsmartMarkedCareHair(idhair){
       const  query= "select h.namehair,s.name,u.nameuser,m.date from markedcare m inner join services s on m.service_id = s.id inner join hairdress h on m.hairdress_id = h.id join users u on m.user_id= u.id where m.hairdress_id="+idhair;
	   return sequelize.query(query);
	}
	static lastMarkedCare(){
		const  query= "select u.emailuser,u.nameuser,h.address,h.namehair,s.name,m.date from markedcare m inner join services s on m.service_id = s.id inner join hairdress h on m.hairdress_id = h.id join users u on m.user_id= u.id order by m.id DESC limit 1";
		return sequelize.query(query);
	}

}
module.exports = Smartquerys;