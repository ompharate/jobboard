import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  resumeLink: String,
  phone: String,
});

const User = mongoose.model("User", userSchema);
export default User;