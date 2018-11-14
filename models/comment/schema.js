const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  text: { type: String, require: true, default: 'Hashtager' },
  author: { type: String, require: true }
});

module.exports = {
  commentSchema
}