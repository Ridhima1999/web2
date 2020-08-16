const mongoose=require('mongoose');
var userSchema = new mongoose.Schema({
    email:String,
    name:String,
    age:Number,
});

module.exports = mongoose.model('User', userSchema);