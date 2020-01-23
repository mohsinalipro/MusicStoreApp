const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  musicItems: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Music'
    }
  ]
});
