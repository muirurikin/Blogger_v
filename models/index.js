const mongoose = require('mongoose');

const { UserSchema } = require('./user'); 

module.exports = {
  models: {
    User: mongoose.model('User', UserSchema),
    Post,
    Comment,
  },
  
}