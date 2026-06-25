// used for creating functions

import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
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
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });
        }

       const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

        const photo = {
            url: photoURL,
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
            success: true,
            message: "User Registered Successfully",
            user: newUser,
        });

    } catch (error) {
        console.log(error);

         res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const Logout_user = (req, res) => {
    res.json({
        message: "Logout Successfully from controller",
    });
};

export const Login_user = (req, res) => {
    res.json({
        message: "Login Successfully from controller",
    });
};