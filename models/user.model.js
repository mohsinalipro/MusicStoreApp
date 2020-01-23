const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactDetails: String,
  publicContactDetails: Boolean,

  // encryped hash password
  password: {
    type: String,
    required: true
  }
});
