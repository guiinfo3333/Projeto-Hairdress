const Service = require('../models/Service');
const Hairdress = require('../models/Hairdress');
module.exports =  {

	async index(req,res){
		const {hair_id} = req.params;

		const hairdress = await Hairdress.findByPk(hair_id,{
			include: {association : 'services'}
		});

		return res.json(hairdress.services);  //retorna apenas os sevicox de cada cabelereiro 


	},
	async store(req,res){
  		const { hair_id } = req.params;
  		const {name,value,detaill} = req.body;

  		const  hairdress = await Hairdress.findByPk(hair_id);
	
        if (!hairdress) {
        	return res.status(400).json({error:'Hairdress not found'});
        }else{
			
				if(!await Service.findOne({ where: {name : name}})){
					const service = await Service.create({
						name:name,
						value:value,
						hairdress_id:hair_id,
						detaill:detaill,
					});
					return res.json(service);
				}else{
					return res.status(400).send({err:'Service already exists'});
				}
    }
	} 
}