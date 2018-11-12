const mongoose = require('mongoose');

const { UserSchema } = require('./user');
const { postSchema } = require('./post');
const { commentSchema } = require('./comment');

module.exports = {
  models: {
    User: mongoose.model('User', UserSchema),
    Post: mongoose.model('Post', postSchema),
    Comment: mongoose.model('Comment', commentSchema)
  },
}