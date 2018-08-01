var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  email: String,
  number: String
});

module.exports = mongoose.model('contactlist', userSchema);
