const mysql = require('mysql');
let db =mysql.createConnection({
    host:'localhost' ,
    user :'root',
    password:'',
    database:"db_education"
})

db.connect(function(err){

         if(!err){
    
             console.log('connexion reussie')
    
         }else{
             console.log(err)
             console.log('connection echec ' + JSON.stringify(err , undefined ,2))
     }
     })

module.exports =db;