const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, require: true },
  author: { type: String, require: true },
  body: { type: String, require: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  created: { type: Date, default: Date.now },
});

module.exports = {
  postSchema
};
