const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  businessSettings: {
    logo: String, // image url
    name: String,
    businessDetails: String,
    displayInfoOnTrackHover: [String], // array of information keys
    displayMetadataInExplorer: [String] // array of metadata keys
  },

  teamMembers: [{ type: mongoose.Types.ObjectId, ref: 'User' }], // array of user ids,
  billing: {
    subscriptions: [{ type: mongoose.Types.ObjectId, ref: 'Subscription' }] //
  },

  metadataSettings: {
    artist: Boolean,
    album: Boolean,
    genre: Boolean,
    composer: Boolean,
    grouping: Boolean,
    comments: Boolean,

    customMessage: String
  },

  tags: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'TagCategory'
    },
    tagType: {
      type: String,
      enum: ['DEFAULT', 'CUSTOM'],
      default: 'DEFAULT'
    }
  }
});
