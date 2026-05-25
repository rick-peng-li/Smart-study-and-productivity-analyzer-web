import mongoose from "mongoose";

// Connect to MongoDB Atlas (beginner-friendly)
// Reads `MONGODB_URI` from environment variables
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    // In development it's convenient to allow the server to run without a DB.
    // Warn the developer and return early instead of exiting the process.
    console.warn(
      "⚠️  MONGODB_URI is not defined. Database connection skipped. Create a .env file from .env.example to enable MongoDB."
    );
    return null;
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✓ MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error("✗ MongoDB connection error:", err.message);
    // For beginners, don't crash the server here; return null and let handlers handle missing DB.
    return null;
  }
};
