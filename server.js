var express = require('express');
var app = express();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/data');



var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: String,
  number: String
});
var User = mongoose.model('user', userSchema);





app.use(express.static(__dirname + "/public"));

app.get('/containerlist', function(req, res) {


    // User.find(function (err, todos) {
    
    //         if (err) {
    //             res.send(err);
    //         }
    // console.log("todossss", todos);
    //         res.json(todos); 
    //     });

    person1 = {
        name: 'Haris',
        email: 'hhh@dfg.dfg',
        number: '999333'
    };

    person2 = {
        name: 'Geo',
        email: 'ggg@dfg.dfg',
        number: '444777'
    };

    person3 = {
        name: 'Rio',
        email: 'rrr@dfg.dfg',
        number: '11222'
    };

    var contactlist = [person1, person2, person3];
    console.log("contactlist", contactlist)
res.json(contactlist)

});


app.post('/containerlist', function(req, res) {

    User.create({
        name: req.body.name,            
        email: req.body.email,
        number: req.body.number
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }
        console.log("todossss", todo);
        res.json(todo); 
    });
});


app.listen(8000)
console.log("Port 8000")