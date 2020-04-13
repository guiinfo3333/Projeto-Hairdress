const MarkedCare = require('../models/MarkedCare');

module.exports ={


async store(req,res){
	const {hairdress_id,service_id,user_id,DATE} = req.body;

	const MarkedCare = await MarkedCare.create({
		hairdress_id:hairdress_id,service_id:service_id,user_id:user_id,DATE:DATE
	});

	return res.json(MarkedCare);

}
};