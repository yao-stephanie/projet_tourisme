const express = require('express');
const db = require('../BD/database');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser= bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});

// routes

router.get('/connect', (req, res) => {
    res.render('../views/connect')
});

router.post('/connect',urlencodedParser,function(req , res){
    let {email,password } = req.body
    console.log("donnee_du formulaire",req);
    //  console.log(nom.req);

let selection = 'SELECT  email FROM etudiant WHERE email = ?';
let selection_pass = 'SELECT  password FROM etudiant WHERE password = ?';
db.query([selection, selection_pass], [email, password], (err, result) => {
    if (result == '') {

        db.query(sql, [ email, password ], (err, result) => {
            console.log("bonjour");
        })
    }
    else {
        console.log('entrer une autre adresse email')
    }
})

})



module.exports = router;