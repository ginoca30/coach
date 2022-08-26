const path = require('path');
const nodemailer = require('nodemailer');
const controller = {
	// Root - Show all products
	index:(req, res) => {
        let title = "Coach";
        res.render('index',{title:title});
	},
    accpartner:(req,res)=>{
        let title= "accPartner";
        res.render("partner",{title:title});
    },
    about:(req,res)=>{
      let title= "About";
      res.render("about",{title:title});
  },
  coach: (req,res)=>{
    let title= "Coach";
    res.render("coach",{title:title});
  },
    contacto: (req,res)=>{
        let title= "Contacto";
		res.render("contacto",{title:title});
	},
	enviar: (req,res)=>{
    if (!(req.body.mensaje).includes("@") & !(req.body.mensaje).includes("http")) {
      const output = `
          <p>Has recibido un nuevo contacto</p>
          <h3>Detalle de Contacto</h3>
          <ul>
            <li>Nombre: ${req.body.nombre}</li>
            <li>Agencia: ${req.body.agencia}</li>
            <li>Email: ${req.body.email}</li>
            <li>Telefono: ${req.body.telefono}</li>
            <li>Asunto: ${req.body.asunto}</li>
          </ul>
          <h3>Mensaje</h3>
          <p>${req.body.mensaje}</p>
        `;
  
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'coachjulietanor.com',
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
              user: 'consultas@coachjulietanor.com', // generated ethereal user
              pass: '@'  // generated ethereal password
          },
          tls:{
            rejectUnauthorized:false
          }
        });
  
        // setup email data with unicode symbols
        let mailOptions = {
            from: "consultas@coachjulietanor.com", // sender address
            to: "consultas@coachjulietanor.com", // list of receivers
            subject: 'Consulta', // Subject line
            text: 'Hola', // plain text body
            html: output // html body
        };
  
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
    }
	  res.redirect("/");
	}
};

module.exports = controller;