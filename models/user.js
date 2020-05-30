const mongoose = require('mongoose');
const jwt       = require('jsonwebtoken');

const User = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  like:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  superlike:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  blocked:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
  
});
User.methods.generateToken=function(){
  // the secretkey will be store in a enviroment variable.
  const token=jwt.sign({_id:this._id,email:this.email},"thisisascerectkey");
  return token;
}
module.exports=new mongoose.model("User",User);
