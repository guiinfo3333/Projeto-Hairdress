const MarkedCare = require('../models/MarkedCare');
const smartquery = require('../smartquerys/Smartquerys');
const Mailer = require('../Mailer/Mailer');

module.exports ={

async index(req,res){
	const {hairdress_id} = req.params;
	
	const result = smartquery.selectsmartMarkedCareHair(hairdress_id);
	result.then(([results, metadata]) => {
		return res.json(results);
	  })
	
},
//falta ainda desenvolver uma lógica melhor de consultas para estabelecer um limite entre uma consulta ou outra 
//e também disparar um email quando por exemplo estiver perto da consulta
async store(req,res){
	const {hairdress_id,service_id,user_id,date} = req.body;
	if(!await MarkedCare.findOne({ where: {date : date}})){
		const marked = await MarkedCare.create({
			hairdress_id:hairdress_id,service_id:service_id,user_id:user_id,date:date
		});
		const iam = await smartquery.lastMarkedCare();
		const sh = iam[0];
		Mailer.SendEmail(sh[0]);
		return res.json({marked});
	}else{
	
		return res.status(400).send({err:' Data MarkedCare already exists'});
	}




}
};