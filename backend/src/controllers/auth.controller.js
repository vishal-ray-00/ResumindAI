import {User} from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginUser = async(req,res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            })
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );



        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch(error) {
        res.status(500).json({
            success:false,
            message:"Login Failed",
            error: error.message
        })
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message,
        });
    }
};