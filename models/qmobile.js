
var mongoose = require('mongoose');


var Qmobile = new mongoose.Schema({
    title:String,
    description:String,
    Price:String,
    brand:String,
    imgurl:String
});
const qmobile = module.exports = mongoose.model('qmobile', Qmobile);