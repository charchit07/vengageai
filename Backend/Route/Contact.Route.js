const express = require("express");
const { ContactModel } = require("../Model/Contact.Model");

const contactRouter = express.Router();

// Routes

// Get all contacts
contactRouter.get('/api/contacts', async (req, res) => {
    try {
      const contacts = await ContactModel.find();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Search for contacts
  contactRouter.get('/api/contacts/search', async (req, res) => {
    const { query } = req.query;
    try {
      const contacts = await ContactModel.find({ $text: { $search: query } });
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Create a new contact
  contactRouter.post('/api/contacts', async (req, res) => {
    const contact = new ContactModel(req.body);
    try {
      const newContact = await contact.save();
      res.status(201).json(newContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Update a contact
  contactRouter.patch('/api/contacts/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedContact = await ContactModel.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedContact);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete a contact
  contactRouter.delete('/api/contacts/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await ContactModel.findByIdAndDelete(id);
      res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


module.exports = {
  contactRouter,
};
