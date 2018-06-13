//load in node modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
//sets up express server
const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));
//host the folder /web
app.use(express.static('web'));

//get handlers

//nav bar
app.get('/nav',function (req,res){
    res.sendfile('navbar.html');
});

//start server
app.listen(3000);
console.log('running on port 3000');