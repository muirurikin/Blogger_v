const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

postSchema.plugin(passportLocalMongoose);
const Post =  module.exports = mongoose.model('Post', postSchema);

module.exports.getPosts = function(callback, limit){
    Post.find(callback).limit(limit);
}

module.exports.getPost = function(id, callback){
    Post.findById(id, callback);
}

module.exports.addPost = function(post, callback) {
    Post.create(post, callback);
}