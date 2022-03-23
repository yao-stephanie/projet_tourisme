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


 app.get('/index', (req ,res)=>{
     res.render('index');
 })


  app.get('/connect', (req ,res)=>{
      res.render('connect');
  })

  app.get('/search', (req ,res)=>{
    res.render('search');
})

app.get('/contact2', (req ,res)=>{
    res.render('contact2');
})

app.listen( PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})