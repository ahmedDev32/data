import Users from "@/Models/UserModels";
import bcrypt from "bcrypt"
import connectDb from "@/middleware/db";

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Users.findOne({ email });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    // Check password
    let checkpassword = await bcrypt.compare(password,user.password)
    console.log(user.password,password);
    if (checkpassword) {
      // Passwords match, login successful
      return res.status(200).json({ msg: "Login successful", success: true });
    } else {
      // Passwords don't match, return 401
      return res.status(401).json({ msg: "Incorrect password", success: false });
    }
  } catch (error) {
    // Internal server error
    console.error("Login error:", error);
    return res.status(500).json({ msg: "Internal server error", success: false });
  }
};

export default connectDb(handler);
