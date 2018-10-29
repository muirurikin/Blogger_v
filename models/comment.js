const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, require:true },
    author: { type: String, require:true }
});

const Comment = module.exports = mongoose.model('Comment', commentSchema);