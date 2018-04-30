
var mongoose = require('mongoose');


var oppomobile = new mongoose.Schema({
    title:String,
    description:String,
    Price:String,
    brand:String,
    imgurl:String
});
const oppo = module.exports = mongoose.model('oppomobile', oppomobile);