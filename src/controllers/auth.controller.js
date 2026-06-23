//used fo creating functions
import User from "../models/user.model";

export const RegisterUser = async (req,res) => {
   try{
     const{fullName , email , phone ,password,gender,dob} = req.body;

     if(!fullName || !email || !gender || !dob || !phone || !password)
     {
        res.status(400).json({message:"All feilds Required"});
        return;
     }
     const existingUser = await User.findOne({email});
     if(existingUser)
     {
        res.status(409).json({message:"email Already used "});
        return ;
     }
   }
   catch(error)
   {

   }
}

export const Logout_user = (req,res) => {
    res.json({message : "Logout Successfully from controller"});
}

export const Login_user = (req,res) => {
    res.json({message : "Login Successfully from controller"});
}