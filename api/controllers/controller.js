// var mongoose = require("mongoose");
// var AdminDashboard = require("../models/adminDashboard");
// var User = require("../models/User");
var mongojs = require('mongojs')
var db = mongojs('contactlist', ['contactlist']) //('mongodb://localhost/contactlist')



module.exports = {
    containerlist: function(req, res) {
        console.log("121221212121")

        db.contactlist.find(function (err, todos) {
            console.log("todos----------------", todos)
            res.json(todos)
    
        });
    },

    contactlistDel: function(req, res) {
        var id = req.params.id;
        console.log("reqqqqqqqqqqqqqqqqqqq", id)
        db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function (err, docs) {
            res.json(docs)
        })
    },

    contactlist: function(req, res) {
        console.log(req.body);
        db.contactlist.insert(req.body, function (err, doc) {
            res.json(doc)
        })
    },

    contactlistGet: function(req, res) {
        var id = req.params.id;
        console.log("reqqqqqqqqqqqqqqqqqqq", id)
    
        db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function (err, docs) {
            res.json(docs)
        })
    },

    contactlistUpdate: function(req, res) {
        var id = req.params.id;
        console.log("reqqqqqqqqqqqqqqqqqqq", req.body)
        db.contactlist.findAndModify({
            query: { _id: mongojs.ObjectId(id) },
            update: { $set: { name: req.body.name, email: req.body.email, number: req.body.number } },
            new: true
        }, function (err, doc) {
            res.json(doc);
        })
    },




}
