const Hairdress = require('../models/Hairdress');

module.exports ={

async index(req,res){
	const hairdress = await Hairdress.findAll();

	return res.json(hairdress);
},
async store(req,res){
	const {name,email,password,city,uf,address} = req.body;

	const hairdress = await Hairdress.create({name:name,email:email,password:password,city:city,uf:uf,address:address});

	return res.json(hairdress);

}

};