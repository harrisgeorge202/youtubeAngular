var express = require('express');
var app = express();

var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist']) //('mongodb://localhost/contactlist')


// var mongoose = require('mongoose');
//   mongoose.connect("mongodb://localhost:27017/contactlist", { useNewUrlParser: true });



var bodyParser = require('body-parser')




var router = require('./api/routes/route');








app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use('/', router);







app.listen(8000)
console.log("Port 8000")


module.exports = app;
