
var mongoose = require('mongoose');


var customer = new mongoose.Schema({
    phonename :String,
    price :String,
    name :String,
    cellno:String,
    address:String,
    email:String,
    date :String,
    
});
const customers = module.exports = mongoose.model('customer', customer);
