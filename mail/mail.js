 //Requerimos el paquete
 var nodemailer = require('nodemailer');

 //Creamos el objeto de transporte
 var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'aaron.jazhiel2014@gmail.com',
     pass: 'Prueb@_321'
   }
 });
 
 var mensaje = "Probando la funcion para enviar un correo cuando cambia de estado";
 
 var mailOptions = {
   from: 'aaron.jazhiel2014@gmail.com',
   to: 'aaron.jazhiel@hotmail.com',
   subject: 'Prueba de correo Cambio de estado',
   text: mensaje,
   html: '<img src="https://snag.gy/Qr6o4d.jpg" style="max-width:100%;width:auto;height:auto;">' // html body
 };
 
 transporter.sendMail(mailOptions, function(error, info){
   if (error) {
     console.log(error);
   } else {
     console.log('Email enviado: ' + info.response);
   }
 });