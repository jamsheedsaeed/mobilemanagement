

var mongoose = require('mongoose');


var supplier = new mongoose.Schema({
    name :String,
    cellno:String,
    email:String,
    company:String
    
});
const suppliers = module.exports = mongoose.model('supplier', supplier);
