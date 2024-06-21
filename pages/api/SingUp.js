import Users from "@/Models/UserModels";
import connectDb from "@/middleware/db";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Validate request method
    if (req.method !== 'POST') {
      return res.status(405).json({ msg: "Method Not Allowed", success: false });
    }

    // Destructure and validate request body
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required", success: false });
    }

    // Check if the user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User with this email already exists", success: false });
    }

    // Hash password and create new user
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    });

    // Save new user and generate JWT token
    const savedUser = await newUser.save();
    const token = jwt.sign({ userID: savedUser._id }, process.env.JWT_SEC);

    return res.status(201).json({ msg: "User Created Successfully", success: true, token });
  } catch (error) {
    // Handle specific Mongoose errors
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ msg: "Validation Error", success: false, errors: error.errors });
    }

    // Handle other potential errors
    return res.status(500).json({ msg: "Internal Server Error", success: false });
  }
};

export default connectDb(handler);
