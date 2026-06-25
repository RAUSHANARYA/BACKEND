import mongoose from "mongoose";

const userSchema = mongoose.Schema({
 fullName:{
       type:String,
       required:true,
 },

  email:{
       type:String,
       required:true,
       unique:true,
 },
 phone :
 {
     type:String,
       required:true,
 },
 gender:{
     type:String,
       required:true,
 },
 photo:{
      url:{
         type:String,
      },
      PublicId:{
       type:String,
      },
 },
 password:
 {
    type:String,
    require:true,
 },

 dob:{
    type:Date,
    required : true,
 },
},
 {
    timestamp:true,
 },
);

const User = mongoose.model("User",userSchema);

export default User;