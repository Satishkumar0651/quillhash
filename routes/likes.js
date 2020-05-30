const mongoose=require('mongoose');
const User=require('../models/user');
const express=require("express");
const _=require('lodash');
const bcrypt=require('bcrypt');
const auth = require("../middleware/auth");
const router=express.Router();


router.post("/like/:id",auth,async (req,res)=>{
    const foundUser = await User.findById(req.params.id);
    if(!foundUser){
        res.send("User not Found");
    }
    foundUser.like=req.user;
    const result = await foundUser.save();
    res.redirect("/");
});
router.post("/superlike/:id",auth,async (req,res)=>{
    const foundUser = await User.findById(req.params.id);
    if(!foundUser){
        res.send("User not Found");
    }
    foundUser.superlike=req.user;
    const result = await foundUser.save();
    res.redirect("/");
});

module.exports=router;
