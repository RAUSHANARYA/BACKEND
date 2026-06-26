// used for creating functions

import User from "../models/user.model.js";

export const RegisterUser = async (req, res,next) => {
    try {
        const {
            fullName,
            email,
            phone,
            password,
            gender,
            dob,
        } = req.body;

        if (!fullName || !email || !gender || !dob || !phone || !password) {
                  const error = new Error("All fields Required");
                    error.statusCode = 400;
                    return next(error);
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
           const error = new Error("Email already registred");
            error.statusCode = 409;
            return next(error);
        }

       const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

        const photo = {
            url: photoUrl,
            publicID: null,
        };

        const newUser = await User.create({
            fullName,
            email,
            phone,
            password,
            gender,
            dob,
            photo,
        });

         res.status(201).json({
            message: "User Registered Successfully",
            user: newUser,
        });

    } catch(error){
    console.log(error);
    next(error);
}
};

export const Logout_user = (req, res) => {
    res.json({
        message: "Logout Successfully from controller",
    });
};

export const Login_user = async (req, res,next) => {
    
    try{
        const{email,password} = req.body;
    
        if(!email||!password)
        {
            const error = new Error("All fields Required");
                    error.statusCode = 400;
                    return next(error);
        }

        const existingUser = await User.findOne({email});
         if (!existingUser) {
           const error = new Error("User not found");
            error.statusCode = 404;
            return next(error);
        }
       //check password is correct 
       if(password!==existingUser.password)
       {
           const error = new Error("Incorrect Password");
            error.statusCode = 401;
            return next(error);
       }
       res.status(200).json({
         message :"Welcome back",
         data:existingUser,
       });
    }
   catch(error){
    console.log(error);
    next(error);
}
};