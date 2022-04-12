const express = require('express');
const express_validato = require('express-validator')
const app = express();
let database = require("./BD/database");
const PORT = 5000;
const router = require('./router/inscription')
const router_inscription = require('./router/inscription');
const connexion = require('./router/connect')
const page_index = require('./router/index')

const send_mail = require('./router/send_email')
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", send_mail);
app.use("/", connexion);
app.use("/",page_index)

// app.get('/index', (req, res) => {
//     res.render('index');
// })



// app.get('/search', (req, res) => {
//     res.render('search');
// })

// app.get('/contact2', (req, res) => {
//     res.render('contact2');
// })
// app.get('/connect', function(req, res){
//     res.redirect('../views/connect');
//   });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})