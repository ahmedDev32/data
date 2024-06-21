import Users from "@/Models/UserModels";
import bcrypt from "bcrypt";
import connectDb from "@/middleware/db";

const handler = async (req, res) => {
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

  // Handle actual requests
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Users.findOne({ email });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    // Check password
    let checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
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
