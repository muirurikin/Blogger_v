const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, require: true, default: 'Hashtager' },
  author: { type: String, require: true },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

module.exports.addComment = (comment, callback) => {
  Comment.create(comment, callback);
};
