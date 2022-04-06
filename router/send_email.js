const express =require('express');
const { getMaxListeners } = require('../BD/database');
const router = express.Router()

// routes

router.get('/send_email' ,(req ,res)=>{
    res.render('../views/send_email')

   

})
// router.post('/send_mail', (req,res)=>{
  

router.post('/send_email',(req,res)=>{
     
//installer body-parser avant de pouvoir le lancer si non sa ne passera pas

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'frondostephanie000@gmail.com',
    pass: 'frondo1234'
  }
});

var mailOptions = {
  from: 'frondostephanie000@gmail.com',
  to:req.body.email,
  subject: 'Sending Email using Node.js',
  html: '<h1>That was easy!</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})





module.exports =router;