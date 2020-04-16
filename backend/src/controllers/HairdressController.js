const Hairdress = require('../models/Hairdress');
const bcrypt = require('bcryptjs');

module.exports ={

async index(req,res){
	const hairdress = await Hairdress.findAll();

	return res.json(hairdress);
	
},
async store(req,res){
	const {namehair,emailhair,password,city,uf,address} = req.body;
	const hash = await bcrypt.hash(password,10);
	if(!await Hairdress.findOne({ where: {emailhair : emailhair}})){
	const hairdress = await Hairdress.create({
		namehair:namehair,emailhair:emailhair,password:hash,city:city,uf:uf,address:address
	});
	return res.json(hairdress);

	}else{
		return res.status(400).send({err:'Hairdress already exists'});
	}
}

};