import mongoose from "mongoose";

// User schema for authentication
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email format"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 6,
      select: false, // Don't return password by default
    },
    studyHours: {
      type: Number,
      default: 0,
    },
    streak: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Hash password before saving (we'll add this logic in auth controller)
// userSchema.pre("save", async function(next) {
//   if (!this.isModified("password")) return next();
//   // Password hashing logic will go here
// });

const User = mongoose.model("User", userSchema);
export default User;
