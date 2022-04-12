const express = require('express');
const db = require('../BD/database');
const router = express.Router();

// const bodyParser = require('body-parser');
// const jsonParser= bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({extended:false});
// const text = document.querySelector('btn_essai');

// routes

router.get('/index', (req, res) => {
    res.render('../views/index')
});


module.exports = router;