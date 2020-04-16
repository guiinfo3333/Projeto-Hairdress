const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports ={

async index(req,res){
	const users = await User.findAll();
	return res.json(users);
},
async store(req,res){
	const {nameuser, emailuser,password,city,uf} = req.body;
	const hash = await bcrypt.hash(password,10);
	
	
	if(!await User.findOne({ where: {emailuser : emailuser}})){
		const user = await User.create({nameuser:nameuser,emailuser:emailuser,password:hash,city:city,uf:uf});
		return res.json(user);
	}else{
		return res.status(400).send({err:'User already exists'});
	}
		
		

}

};