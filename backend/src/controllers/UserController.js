const User = require('../models/User');

module.exports ={

async index(req,res){
	const users = await User.findAll();

	return res.json(users);
},
async store(req,res){
	const {name, email,password,city,uf} = req.body;

	const user = await User.create({name:name,email:email,password:password,city:city,uf:uf});

	return res.json(user);

}

};