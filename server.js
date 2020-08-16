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
var newSchema = new mongoose.Schema({
    email:{type:Number, index:true},
    name:{type:String , require:true},
    age:{type:Number},
});

var user = mongoose.model('user', newSchema);
app.post('/new',function(req,res){
   var myData=new user(req.body);
   myData.save().then(item=>{
       res.send("item saved to db");
   })
   .catch(err=>{
<<<<<<< HEAD
    res.status(400).send(err.message+" unable to save db")
})
=======
       res.status(400).send(err.message+" unable to save db")
   })
>>>>>>> 28e3c275fee2bfcb3227f9d2cc9c82a79d54703b

})

var port = app.get('port');
app.listen(port,  function(){
    console.log(`Started to listen on http://localhost:${port}`)
});
