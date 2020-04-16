const Hairdress = require('../models/Hairdress');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

module.exports ={


    async registerHairdress(req,res){
        const {emailhair,password} = req.body;
        const hairdress = await Hairdress.findOne({ where: {emailhair : emailhair}});

        if(!hairdress){
            return res.status(400).json({err:'Email or password invalids !'});
        }else{
            if(!await bcrypt.compare(password,hairdress.password)){
                return res.status(400).json({err:'Email or password invalids !'});
            }else{
                hairdress.password=undefined;
                const token = jwt.sign({id:hairdress.id},authConfig.secret,{
                    expiresIn:86400,
                });
                return res.json({hairdress,token});
            }
        }
    },
    async registerUsers(req,res){
        const {emailuser,password} = req.body;
        const user = await User.findOne({ where: {emailuser : emailuser}});

        if(!user){
            return res.status(400).json({err:'Email or password invalids !'});
        }else{
            if(!await bcrypt.compare(password,user.password)){
                return res.status(400).json({err:'Email or password invalids !'});
            }else{
                user.password=undefined;
                const token = jwt.sign({id:user.id},authConfig.secret,{
                    expiresIn:86400,
                });
                return res.json({user,token});
            }
        }


    }


}