const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");const bcrypt = require("bcrypt");
const { hashSync } = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input fields
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User is already registered!");
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  console.log("Hashed password", hashedpassword)
  const user = await User.create({
    username,
    email,
    password: hashedpassword
  })
  console.log(`User created ${user}`);
  if (user){
    res.status(201).json({_id: user.id, email: user.email })
  }else{
    res.status(400);
    throw new Error ("User data is not valid");
  }
  res.json({ message: "Register the user" });
});


 
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User" });
});

module.exports = { registerUser, loginUser, currentUser };
