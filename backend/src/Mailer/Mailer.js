const nodemailer = require("nodemailer");
const Moment = require('moment');
class Mailer{
   
      static SendEmail(object){
       
         var momentDate = Moment(object.date);
         var dataformated =momentDate.format("DD/MM/YYYY hh:mm");
         var separated = dataformated.split(' ');
       let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com' ,
        port: 587,
        secure: false,
        auth:{
        user:   'antonioguilhermetuf@gmail.com' ,
        pass: ''
         }

        })
        transporter.sendMail({
            from : " "+ object.nameuser+"<antonioguilhermetuf@gmail.com>",
            to: object.emailuser,
            subject: "Atendimento Marcado",
            text: "Seu atendimento no estabelecimento "+object.namehair+" chiquinho foi marcado na data "+ separated[0]+" às "+separated[1]+" ,compareça no horário!"
        }).then(message=>{
            console.log(message);
        }).catch(err =>{
            console.log(err);
        })


        

    }
}
module.exports = Mailer;