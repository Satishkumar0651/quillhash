const express = require('express');
const mongoose = require('mongoose');
const bodyParser    = require('body-parser');
const _           = require('lodash');
const app   = express();
const authRoute = require("./routes/main");
const likeRoute = require("./routes/likes");
const blockRoute = require("./routes/block");
const auth      =require("./middleware/auth");
const User      =require("./models/user");
var path = require("path");
// Middleware
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/tinder",{ useNewUrlParser: true })
    .then(()=>{
      console.log("Connected to the database");
    })
    .catch((err)=>{
      console.log(err);
    })
app.use(express.static(__dirname + '/public'));
// All Routes
app.use("/",authRoute);
app.use("/user",likeRoute);
app.use("/user",blockRoute);

app.get("/",function(req,res){
  res.sendFile(path.join(__dirname + '/public/signup.html') )
});
const port = process.env.PORT || 4012;


app.listen(port,(err)=>{
  if(err){
    console.log(err);
  }
  console.log(`Server is Runing on Port ${port}`);
})
