import User from "../models/user.js";

const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  const isUserExists = await User.findOne({ email: email });

  if (isUserExists) return res.status(400).json({ msg: "User already exists" });

  const newUser = new User({ fullName, email, password });
  newUser.save();

  return res.redirect("/login");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const isUserExists = await User.findOne({ email: email });

  console.log(isUserExists);

  if (!isUserExists) return res.status(404).json({ msg: "User not found" });

  if (isUserExists.password !== password)
    return res.json({ msg: "Password does not match" });

  return res.redirect("/job");
};

export { registerUser, loginUser };
