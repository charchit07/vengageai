// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Simple phone number validation (10 digits)
        return /^\d{10}$/.test(value);
      },
      message: 'Invalid phone number format',
    },
  },
},{
  versionKey:false
});


const ContactModel = mongoose.model('contact', contactSchema);

module.exports = {ContactModel};
