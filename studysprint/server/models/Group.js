const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  subject: String,
  members: Number
});

module.exports = mongoose.model('Group', groupSchema);
