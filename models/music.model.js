const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  containsMusic: Boolean,

  artist: String,

  publisher: String,

  isrc: String,

  composer: String,

  releaseTitle: String,

  buyLink: String,

  albumTitle: String,

  recordLabel: String,

  releaseDate: Date,

  barcode: String,

  iswc: String,

  pLine: String,

  artist: {
    type: mongoose.Types.ObjectId,
    ref: 'Artist'
  },

  containsExplicitContent: Boolean,

  license: {
    type: mongoose.Types.ObjectId,
    ref: 'License'
  },

  length: Number
});
