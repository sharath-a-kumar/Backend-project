//@description
//@route GET /api/contacts

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all the Contacts" });
};

// Get by id
const getContact = (req, res) => {
    res.status(200).json({ message: "Get by id the Contacts" });
  };
   
// POST REQUEST
const createContact = (req, res) => {
  res.status(201).json({ message: "Create the  Contacts" });
};
//Update by id
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

//Delete by id
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
  };
  

module.exports = { 
    getContacts,
    getContact,
    createContact,
    updateContact, 
    deleteContact
 };
