
var mongoose = require('mongoose');


var samsungmobile = new mongoose.Schema({
    title:String,
    description:String,
    Price:String,
    brand:String,
    imgurl:String
});
const samsung = module.exports = mongoose.model('samsungmobile', samsungmobile);