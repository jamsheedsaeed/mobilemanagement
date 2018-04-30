
var mongoose = require('mongoose');


var nokiamobile = new mongoose.Schema({
    title:String,
    description:String,
    Price:String,
    brand:String,
    imgurl:String
});
const nokia = module.exports = mongoose.model('nokiamobile', nokiamobile);