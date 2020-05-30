const mongoose=require('mongoose');
const User=require('../models/user');
const express=require("express");
const _=require('lodash');
const bcrypt=require('bcrypt');
const auth = require("../middleware/auth");
const router=express.Router();


router.post("/block/:id",auth,async (req,res)=>{
    // Find the user you have to block
    const foundUser = await User.findById(req.params.id);
    if(!foundUser){
        res.send("User not Found");
    }
    // then save the user in your block list
    const findMe = await User.findById(req.user._id);
    findMe.blocked = foundUser;
    const result = await findMe.save();
    res.redirect("/");
});


module.exports=router;
