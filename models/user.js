const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true,
  },
  email: String,
  avatar: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);