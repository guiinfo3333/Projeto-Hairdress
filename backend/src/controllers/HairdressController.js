const Hairdress = require('../models/Hairdress');

module.exports ={

async index(req,res){
	const hairdress = await Hairdress.findAll();

	return res.json(hairdress);
	
},
async store(req,res){
	const {namehair,emailhair,password,city,uf,address} = req.body;

	const hairdress = await Hairdress.create({
		namehair:namehair,emailhair:emailhair,password:password,city:city,uf:uf,address:address
	});

	return res.json(hairdress);

}

};