
var mongoose = require('mongoose');


var supplier = new mongoose.Schema({
    name:String,
    contact:String,
    address:String,
    companyname:String
   
});
const supplier = module.exports = mongoose.model('supplierdata', supplier);