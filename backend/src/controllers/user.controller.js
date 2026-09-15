import { User } from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username must be unique",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const userResponse = user.toObject();
    delete userResponse.password;
    res.status(201).json({
      success: true,
      message: "User Created Succesfully",
      user:userResponse,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

