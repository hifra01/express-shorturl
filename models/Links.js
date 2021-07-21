const mongoose = require('mongoose');

const { Schema } = mongoose;

const link = new Schema(
  {
    alias: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  { collection: 'links' },
);

module.exports = mongoose.model('links', link);
