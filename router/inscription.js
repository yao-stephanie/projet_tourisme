 const express = require('express');
 const router = express.Router();
 const db = require('../BD/database');
 const bodyParser = require('body-parser');
 const jsonParser= bodyParser.json()
 const urlencodedParser = bodyParser.urlencoded({extended:false});


 router.get('/inscription',function(req , res) {
     res.render('../views/inscription')
 })


 router.post('/inscription',urlencodedParser,function(req , res){

    let {nom,prenom,email,password } = req
    console.log("donnee_du formulaire",req);
     console.log(nom.req.body);

    let sql ="INSERT INTO `inscription` (`nom`, `prenom`, `email`, `password`) VALUES (?,?,?,?)"; 
    
    db.query(sql,[nom,prenom,email,password],(err,result)=>{
       console.log('bonjour ');
        if (err) { 
            console.log("ERREUR",err);   
            // res.send('bonjour') 
            
        } else {
            console.log("success",result);
         res.redirect('/')
        }
   })
 })

 module.exports = router;