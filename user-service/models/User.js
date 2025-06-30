import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    max: 50,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  role: {
    type: String,
    enum: ["Learner", "Instructor", "Admin"],
    default: "Learner",
  },
});

const User = new mongoose.model("User", UserModel);

export default User;
