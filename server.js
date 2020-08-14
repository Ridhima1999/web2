const express =require('express')
const app=express();
const mongoose=require('mongoose')
const configLib = require('./backend/lib/configLib');
var dbconnect = require('./backend/db/dbconnect');
dbconnect.connect();

app.use(express.json());
app.set('port', configLib.port);
app.use('/', function(req, res, next){
    console.log('User Request for Home Page '+new Date());
    next();
})
app.get('/',function(req,res){
    res.sendFile(__dirname+"/frontend/html/index.html");
})
var userSchema = new mongoose.Schema({
    email:String,
    name:String,
    age:Number,
});

var User = mongoose.model('User', userSchema);
app.post('/new',function(req,res){
   var myData=new User(req.body);
   myData.save().then(item=>{
       res.send("item saved to db");
   })
   .catch(err=>{
       res.status(400).send(err.message+" unable to save db")
   })

})

var port = app.get('port');
app.listen(port,  function(){
    console.log(`Started to listen on http://localhost:${port}`)
});
