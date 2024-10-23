const asyncHandler = require("express-async-handler");
const Contact = require ("../models/contactModel")
//@description
//@route GET /api/contacts

const getContacts = asyncHandler( async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({contacts});
});

// Get by id
const getContact = asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404);
    throw new Error ("Contact not found")
  }
    res.status(200).json({contact});
});

// POST REQUEST
const createContact =asyncHandler( async (req, res) => {
  console.log("Request body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Mandotory please fill all the Details ");
  }

  const contact = await Contact.create({
    name,email,phone,
  })
  res.status(201).json({ contact});
});
//Update by id
const updateContact =  asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404);
    throw new Error ("Contact not found")
  }
   const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true}
   )
  res.status(200).json({updatedContact });
});

//Delete by id
const deleteContact =  asyncHandler( async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact){
    res.status(404);
    throw new Error ("Contact not found")
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Contact deleted successfully" });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
