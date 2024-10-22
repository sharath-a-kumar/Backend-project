const asyncHandler = require("express-async-handler");

//@description
//@route GET /api/contacts

const getContacts = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get all the Contacts" });
});

// Get by id
const getContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: "Get by id the Contacts" });
});

// POST REQUEST
const createContact =asyncHandler( async (req, res) => {
  console.log("Request body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Mandotory please fill all the Details ");
  }
  res.status(201).json({ message: "Create the  Contacts" });
});
//Update by id
const updateContact =  asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//Delete by id
const deleteContact =  asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
