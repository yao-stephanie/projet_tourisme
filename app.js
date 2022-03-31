const express = require('express');
// const validator = require('expess-validator')
const app = express();
let database = require("./BD/database");
const PORT = 5000;
const router = require('./router/inscription')
const router_inscription = require('./router/inscription');

 const bodyParser = require('body-parser');
//   const jsonParser= bodyParser.json();
//  const urlencodedParser = bodyParser.urlencoded({extended:false});


app.set('views', './views')
app.set('view engine', 'ejs')
// app.use(express.json())
app.use('/Public', express.static('public'));
app.use("/", router_inscription);
app.use("/", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// database.connect(function(err){

//     if(!err){

//         console.log(err)

//         console.log('connexion reussie')

//     }else{
//         console.log('connection echec ' + JSON.stringify(err , undefined ,2))
//     }
// })

// const { body, validationResult } = require('express-validator');

// app.post('/inscription',[

//     body('name','entrer votre nom')
//     .exists()
//     .isLength({min:4}),

//     body('prenom','entrer votre prenom')
//     .exists()
//     .isLength({min:4}),

//     body('email','entrer une email valide')
//     .exists()
//     .isEmail(),

//     body('password','entrer un password valide')
//     .exists()
//     .isNumeric(),


//   ],(req,res )=>{
//     // const errors =validationResult(req);
//     // if(!errors.isEmpty()){
//     //   return res.status(400).json({errors: errors.array()})
//     //   console.log(errors)
//     // }
//   })


app.get('/index', (req, res) => {
    res.render('index');
})


app.get('/connect', (req, res) => {
    res.render('connect');
})

app.get('/search', (req, res) => {
    res.render('search');
})

app.get('/contact2', (req, res) => {
    res.render('contact2');
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})