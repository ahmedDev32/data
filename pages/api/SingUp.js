import Users from "@/Models/UserModels";
import connectDb from "@/middleware/db";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let handler = async (req, res) => {
  try {
    // Validate request method
    if (req.method !== 'POST') {
      return res.status(405).json({ msg: "Method Not Allowed", success: false });
    }
    res.setHeader('Allow', ['POST']);

    // Destructure and validate request body
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required", success: false });
    }

    // Check if the user already exists
    let existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "User with this email already exists", success: false });
    }
   let passwordHash = await bcrypt.hash(password,10) 
    // Create and save new user
    let NewUser = new Users({
      name,
      email,
      password:passwordHash,
    });
    let saveUSer = await NewUser.save();
    let token = jwt.sign({userID:saveUSer._id},process.env.JWT_SEC)

    return res.status(201).json({ msg: "User Created Successfully", success: true,token });
  } catch (error) {
    // Handle specific Mongoose errors
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ msg: "Validation Error", success: false, errors: error.errors });
    }

    // Handle other potential errors
    return res.status(500).json({ msg: "Internal Server Error", success: false });
  }
}

export default connectDb(handler);
