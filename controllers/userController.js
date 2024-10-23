const asyncHandler = require("express-async-handler");
const User = require ("../models/userModel")

//@description Registers the User
//@route GET /api/contacts

const registerUser = asyncHandler(async (req, res) => {
  const {username, email, password }= req.body;
  if (!username || !email || !password ){
    res.status(400);
    throw new Error ("All fields are mandatory !")
  }

  const userAvailable = await User.findOne({email});
  if ( userAvailable ){
    res.status(400);
    throw new Error ("User is already Registered! ")
  }

  res.json({ message: "Register the user" });
});

// post Request 
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//Current User Get Request
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User" });
});

module.exports = { registerUser, loginUser, currentUser };
