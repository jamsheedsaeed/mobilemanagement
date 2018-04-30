
var mongoose = require('mongoose');


var Hmobile = new mongoose.Schema({
    title:String,
    description:String,
    Price:String,
    brand:String,
    imgurl:String
});
const huaweimobile = module.exports = mongoose.model('Hmobile', Hmobile);