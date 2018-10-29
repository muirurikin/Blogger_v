const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, require:true },
    author: { type: String, require: true},
    body: { type: String, require:true },
    comments: [ { type: mongoose.Schema.Types.ObjectId, ref: "Comment" } ],
    created: { type: Date, default: Date.now }
});

postSchema.plugin(passportLocalMongoose);
const Post =  module.exports = mongoose.model('Post', postSchema);

module.exports.getPosts   = function(callback, limit) {
    Post.find(callback).limit(limit);
};

module.exports.addPost    = function(post, callback) {
    Post.create(post, callback);
};

module.exports.getPost    = function(id, callback) {
    Post.findById(id, callback);
};

module.exports.updatePost = function(id, user, options, callback) {
    let query = {_id: id};
    let update = {
        title: post.title,
        author: post.author,
        body: post.body
    };
    Post.findOneAndUpdate(query, update, options, callback);
};

module.exports.removePost = function(id, callback) {
    let query = {_id: id};
    Post.findOneAndDelete(query, callback);
};