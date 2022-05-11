const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  skillLevel:{
    type: String,
  },

  description:{
    type: String,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MMMM D, YYYY [at] hh:mm a')
  },

  salt: {
    type: String
  }
});

const User = model('User', userSchema);
module.exports = User;
