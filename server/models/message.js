var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MessageSchema   = new Schema({
    _id:String,
    name: String,
    email: String
});

module.exports = mongoose.model('Message', MessageSchema);
