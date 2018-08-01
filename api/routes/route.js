var express = require('express');
var app = require("./../../server.js");
var router = express.Router();
var user = require("../controllers/controller.js");
// var AdminDashboard = require("../models/adminDashboard");

var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist']) //('mongodb://localhost/contactlist')




router.get('/containerlist', user.containerlist);
router.post('/contactlist', user.contactlist);
router.delete('/contactlist/:id', user.contactlistDel);
router.get('/contactlist/:id', user.contactlistGet);
router.put('/contactlist/:id', user.contactlistUpdate);



// router.get('/containerlist', function (req, res) {
//     console.log("121221212121")

//     db.contactlist.find(function (err, todos) {
//         console.log("todos----------------", todos)
//         res.json(todos)

//     });
// });

// router.post('/contactlist', function (req, res) {
//     console.log(req.body);
//     db.contactlist.insert(req.body, function (err, doc) {
//         res.json(doc)
//     })
// });

// router.delete('/contactlist/:id', function (req, res) {
//     var id = req.params.id;
//     console.log("reqqqqqqqqqqqqqqqqqqq", id)
//     db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, docs) {
//         res.json(docs)
//     })
// });


// router.get('/contactlist/:id', function (req, res) {
//     var id = req.params.id;
//     console.log("reqqqqqqqqqqqqqqqqqqq", id)

//     db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function (err, docs) {
//         res.json(docs)
//     })

// });

// router.put('/contactlist/:id', function (req, res) {
//     var id = req.params.id;
//     console.log("reqqqqqqqqqqqqqqqqqqq", req.body)
//     db.contactlist.findAndModify({
//         query: { _id: mongojs.ObjectId(id) },
//         update: { $set: { name: req.body.name, email: req.body.email, number: req.body.number } },
//         new: true
//     }, function (err, doc) {
//         res.json(doc);
//     })
// })



module.exports = router;
