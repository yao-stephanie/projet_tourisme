const express = require('express');
const app = express();
const PORT =5000;
const router = require('./router/inscription')
const router_inscription = require('./router/inscription');

app.set('views','./views');
app.set('view engine','ejs');

app.use('/Public', express.static('public'));
app.use("/",router_inscription);
app.use("/",router);

app.listen( PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})