const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  body: { type: String, require: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  created: { type: Date, default: Date.now },
});

postSchema.plugin(passportLocalMongoose);
const Post = mongoose.model('Post', postSchema);
module.exports = Post;

module.exports.getPosts = (callback, limit) => {
  Post.find(callback).limit(limit);
};

module.exports.addPost = (post, callback) => {
  Post.create(post, callback);
};

module.exports.getPost = (id, callback) => {
  Post.findById(id, callback);
};

module.exports.updatePost = (id, post, options, callback) => {
  const query = { _id: id };
  const update = {
    title: post.title,
    author: post.author,
    body: post.body,
  };
  Post.findOneAndUpdate(query, update, options, callback);
};

module.exports.removePost = (id, callback) => {
  const query = { _id: id };
  Post.findOneAndDelete(query, callback);
};
