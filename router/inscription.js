 const express = require('express');
 const router = express.Router();
 const db = require('../BD/database');
  const bodyParser = require('body-parser');
  const jsonParser= bodyParser.json();
  const urlencodedParser = bodyParser.urlencoded({extended:false});

   const { body , validationResult}=require("express-validator"); 


 router.get('/',function(req , res) {
     res.render('../views/inscription',{alert:{}})
 })


 router.post('/inscription',urlencodedParser,function(req , res){

    let {nom,prenom,email,password } = req.body
    console.log("donnee_du formulaire",req);
     console.log(nom.req);

    let sql ="INSERT INTO `etudiants` (`nom`, `prenom`, `email`, `password`) VALUES (?,?,?,?)"; 
    
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


 router.post("/connect",[

    body('nom')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:20})
    .withMessage('Minimun 5 caractères obligatoires')
        ,
        
    body('prenom')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:10})
    .withMessage('Minimun 5 caractères obligatoires')
    ,
    body('email')
    .isEmail()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide'),
    body('password')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:10})
    .withMessage('Minimun 5 caractères obligatoires')
],
     (req, res) => {
     
   // Finds the validation errors in this request and wraps them in an object with handy functions
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    //  return res.status(400).json({ alert: errors.array() });
     const boom =errors.mapped();
     console.log(boom)
     res.render('inscription',{alert:boom})
   //   res.render('inscription',{errors:errors})
   }
        
     }
        
     
   
 
)

 module.exports = router;