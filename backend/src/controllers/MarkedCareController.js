const MarkedCare = require('../models/MarkedCare');
const smartquery = require('../smartquerys/Smartquerys');

module.exports ={

async index(req,res){
	const {hairdress_id} = req.params;
	
	const result = smartquery.selectsmartMarkedCare();
	result.then(([results, metadata]) => {
		return res.json(results);
	  })
	
},
async store(req,res){
	const {hairdress_id,service_id,user_id,date} = req.body;

	const marked = await MarkedCare.create({
		hairdress_id:hairdress_id,service_id:service_id,user_id:user_id,date:date
	});

	return res.json(marked);

}
};