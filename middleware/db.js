// middleware/mongoose.js
import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection with increased timeout
  try {
    await mongoose.connect(process.env.NEXT_MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout
    });
    return handler(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database connection failed' });
  }
};

export default connectDb;
