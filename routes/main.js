const mongoose=require('mongoose');
const User=require('../models/user');
const express=require("express");
const _=require('lodash');
const bcrypt=require('bcrypt');
const router=express.Router();
const app   = express();
var path = require("path");


//app.use(express.static(path.join(__dirname, '../public')));
router.get("/login",function(req,res){
     res.sendFile(path.join(__dirname, '../public', 'login.html'))
   }
 
//   console.log("helo")
 );

  
//   router.get("/login",function(req,res){
//     res.sendFile("Hello world") 
//   });

router.post("/signup",async (req,res)=>{
    console.log(req.body);
    const findUser= await User.findOne({email:req.body.email})
    if(findUser){
        res.send("User alredy in DataBAse");
        return;
    }
    const newUser=new User(_.pick(req.body,['email','password']))
    const salt =await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(req.body.password,salt);
    newUser.password=hashpassword;
    try {
       const result= await newUser.save();
       const token = result.generateToken();
       res.header('x-auth-token',token).send(_.pick(result,['_id','name','email']))
    } catch (error) {
        console.log("Error Found",error.message);
    }
});

router.post("/login",async (req,res)=>{
    const foundUser = await User.findOne({email:req.body.email});
    if(!foundUser){
        res.send("No Account with the email -"+req.body.email);
    }
    const validPassword=await bcrypt.compare(req.body.password,foundUser.password);
   if(!validPassword){
       res.send("Password Incorrect")
       return;
   }
      const token=foundUser.generateToken();
       res.header('x-auth-token',token).send(_.pick(foundUser,['_id','name','email']));
})
module.exports=router;
